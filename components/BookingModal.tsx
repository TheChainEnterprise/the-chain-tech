"use client";

import { useState, useEffect } from "react";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
    tenantId: string;
    sessionId: string;
    onClose: () => void;
    onSuccess: () => void;
}

export default function BookingModal({ tenantId, sessionId, onClose, onSuccess }: BookingModalProps) {
    const [selectedDate, setSelectedDate] = useState("");
    const [slots, setSlots] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        if (!selectedDate) return;
        
        async function fetchSlots() {
            setLoadingSlots(true);
            try {
                const res = await fetch(`https://ainegotiator-8rik.onrender.com/api/calendar/slots/${tenantId || "the_chain_technologies"}?date=${selectedDate}`);
                const data = await res.json();
                setSlots(Array.isArray(data) ? data : ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"]);
            } catch (err) {
                console.error("Failed to fetch slots:", err);
                setSlots(["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"]);
            }
            setLoadingSlots(false);
        }
        fetchSlots();
    }, [selectedDate, tenantId]);

    async function handleConfirm() {
        if (!selectedDate || !selectedTime) return;

        setSubmitting(true);
        try {
            const res = await fetch("https://ainegotiator-8rik.onrender.com/book/confirm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    tenantId: tenantId || "the_chain_technologies", 
                    sessionId, 
                    date: selectedDate, 
                    time: selectedTime 
                })
            });

            const data = await res.json();
            if (data.success) {
                setConfirmed(true);
                setTimeout(() => {
                    onSuccess();
                    onClose();
                }, 2500);
            } else {
                alert(data.error || "Booking failed.");
            }
        } catch (err) {
            console.error("Booking confirmation error:", err);
            alert("Something went wrong confirming your booking.");
        }
        setSubmitting(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="relative w-full max-w-lg rounded-3xl border border-cyan-400/30 bg-[#0B1118] p-6 text-white shadow-[0_0_60px_rgba(34,211,238,0.25)]">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-lg p-2 text-zinc-400 hover:bg-white/10 hover:text-white"
                >
                    <X size={20} />
                </button>

                {confirmed ? (
                    <div className="py-12 text-center space-y-4">
                        <CheckCircle2 className="mx-auto h-16 w-16 text-cyan-400 animate-bounce" />
                        <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
                        <p className="text-sm text-zinc-400">Your slot is locked in and an email confirmation has been sent.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <CalendarIcon className="text-cyan-400" size={22} /> Select Appointment Time
                            </h2>
                            <p className="text-xs text-cyan-300 mt-1">Pick a date to view available time slots.</p>
                        </div>

                        {/* Date Picker Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Choose Date</label>
                            <input 
                                type="date" 
                                min={today}
                                value={selectedDate}
                                onChange={(e) => {
                                    setSelectedDate(e.target.value);
                                    setSelectedTime(""); // reset time when date changes
                                }}
                                className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-4 py-3 text-white outline-none focus:border-cyan-400 cursor-pointer"
                            />
                        </div>

                        {/* Interactive Clickable Time Slots Grid (Like Google Calendar / Modern Clinics) */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                <Clock size={14} /> Available Times
                            </label>
                            
                            <div className="min-h-[140px] max-h-[200px] overflow-y-auto rounded-xl border border-cyan-400/20 bg-[#05070A] p-3">
                                {!selectedDate ? (
                                    <div className="flex h-full items-center justify-center py-8 text-xs text-zinc-500">
                                        Please select a date above first.
                                    </div>
                                ) : loadingSlots ? (
                                    <div className="flex h-full items-center justify-center py-8 text-xs text-cyan-400 animate-pulse">
                                        Checking live calendar availability...
                                    </div>
                                ) : slots.length === 0 ? (
                                    <div className="flex h-full items-center justify-center py-8 text-xs text-red-400">
                                        No available times on this date.
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-3 gap-2">
                                        {slots.map((slot, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => setSelectedTime(slot)}
                                                className={`rounded-lg py-2.5 px-3 text-xs font-semibold transition cursor-pointer border ${
                                                    selectedTime === slot
                                                        ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                                        : "bg-[#0B1118] text-zinc-300 border-cyan-400/10 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                                                }`}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button 
                            type="button"
                            onClick={handleConfirm}
                            disabled={!selectedDate || !selectedTime || submitting}
                            className="w-full rounded-xl bg-cyan-400 py-4 font-bold text-black transition hover:bg-cyan-300 disabled:opacity-50 shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer"
                        >
                            {submitting ? "Confirming Booking..." : selectedTime ? `Confirm for ${selectedTime}` : "Select a Time Slot"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
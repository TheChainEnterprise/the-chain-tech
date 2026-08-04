"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2 } from "lucide-react";

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
                const res = await fetch(`https://ainegotiator-8rik.onrender.com/api/calendar/slots/${tenantId}?date=${selectedDate}`);
                const data = await res.json();
                setSlots(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Failed to fetch slots", err);
                setSlots(["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"]);
            }
            setLoadingSlots(false);
        }
        fetchSlots();
    }, [selectedDate, tenantId]);

    async function handleConfirm(e: React.FormEvent) {
        e.preventDefault();
        if (!selectedDate || !selectedTime) return;

        setSubmitting(true);
        try {
            const res = await fetch("https://ainegotiator-8rik.onrender.com/book/confirm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tenantId, sessionId, date: selectedDate, time: selectedTime })
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
            console.error(err);
            alert("Something went wrong.");
        }
        setSubmitting(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-md rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-6 text-white shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-lg p-2 text-zinc-400 hover:bg-white/10 hover:text-white"
                >
                    <X size={20} />
                </button>

                {confirmed ? (
                    <div className="py-10 text-center space-y-4">
                        <CheckCircle2 className="mx-auto h-16 w-16 text-cyan-400 animate-bounce" />
                        <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
                        <p className="text-sm text-zinc-400">We’ve locked your appointment into the calendar and sent a confirmation email.</p>
                    </div>
                ) : (
                    <form onSubmit={handleConfirm} className="space-y-5">
                        <div>
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Calendar className="text-cyan-400" size={22} /> Select Appointment Slot
                            </h2>
                            <p className="text-xs text-cyan-300 mt-1">Pick a date and time that works best for you.</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Date</label>
                            <input 
                                type="date" 
                                min={today}
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                required
                                className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-4 py-3 text-white outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                <Clock size={14} /> Available Times
                            </label>
                            <select 
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                disabled={!selectedDate || loadingSlots}
                                required
                                className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-4 py-3 text-white outline-none focus:border-cyan-400 disabled:opacity-50"
                            >
                                <option value="">{loadingSlots ? "Loading live slots..." : selectedDate ? "Select a time..." : "Choose a date first"}</option>
                                {slots.map((slot, idx) => (
                                    <option key={idx} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>

                        <button 
                            type="submit"
                            disabled={!selectedTime || submitting}
                            className="w-full rounded-xl bg-cyan-400 py-4 font-bold text-black transition hover:bg-cyan-300 disabled:opacity-50 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        >
                            {submitting ? "Confirming..." : "Confirm Booking"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
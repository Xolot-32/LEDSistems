import React, { useState } from 'react';
import type { MaintenanceReport } from '../../types';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { Alert } from '../ui/Alert';

interface MaintenanceLogSectionProps {
    systemName: string;
}

// Mock data - in a real app, this would come from a database/API
const initialReports: MaintenanceReport[] = [
    {
        id: '1',
        date: '2024-07-15',
        technician: 'Juan Pérez',
        activity: 'Limpieza de Ventilación',
        observations: 'Se utilizó aire comprimido para limpiar el ventilador y las rejillas de la unidad de control. No se encontraron obstrucciones mayores.',
        evaluation: 4,
        system: 'Sistema LED'
    }
];

const StarRating: React.FC<{ rating: number; onRate: (rating: number) => void }> = ({ rating, onRate }) => {
    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => onRate(star)}
                    className={`text-2xl transition-colors ${star <= rating ? 'text-amber-400' : 'text-slate-300 hover:text-amber-200'}`}
                    aria-label={`Rate ${star} stars`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export const MaintenanceLogSection: React.FC<MaintenanceLogSectionProps> = ({ systemName }) => {
    const [reports, setReports] = useState<MaintenanceReport[]>(initialReports.filter(r => r.system === systemName));
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        technician: '',
        activity: '',
        observations: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.technician || !formData.activity) {
            alert('Por favor, complete los campos de Técnico y Actividad.');
            return;
        }

        const newReport: MaintenanceReport = {
            id: new Date().toISOString(),
            ...formData,
            evaluation: 0, // Default evaluation
            system: systemName
        };

        // In a real application, you would send this data to your backend API here.
        setReports(prev => [newReport, ...prev]);

        // Reset form
        setFormData({
            date: new Date().toISOString().split('T')[0],
            technician: '',
            activity: '',
            observations: '',
        });
    };

    const handleRate = (reportId: string, rating: number) => {
        // In a real application, you would send this update to your backend API here.
        setReports(prev =>
            prev.map(report =>
                report.id === reportId ? { ...report, evaluation: rating } : report
            )
        );
    };

    return (
        <SectionWrapper title="Registro de Mantenimiento" icon="📝">
            <p>Utilice este formulario para registrar todas las intervenciones de mantenimiento realizadas en el <strong>{systemName}</strong>. Un registro detallado es crucial para el seguimiento y la garantía del sistema.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Form Column */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <SectionTitle>Nuevo Reporte de Mantenimiento</SectionTitle>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Fecha</label>
                            <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                         <div>
                            <label htmlFor="technician" className="block text-sm font-medium text-slate-700 mb-1">Nombre del Técnico</label>
                            <input type="text" id="technician" name="technician" value={formData.technician} onChange={handleInputChange} placeholder="Ej: Juan Pérez" required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                         <div>
                            <label htmlFor="activity" className="block text-sm font-medium text-slate-700 mb-1">Actividad Realizada</label>
                            <input type="text" id="activity" name="activity" value={formData.activity} onChange={handleInputChange} placeholder="Ej: Revisión de conexiones" required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                         <div>
                            <label htmlFor="observations" className="block text-sm font-medium text-slate-700 mb-1">Observaciones</label>
                            <textarea id="observations" name="observations" value={formData.observations} onChange={handleInputChange} rows={4} placeholder="Describa cualquier detalle relevante, problemas encontrados o recomendaciones." className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            Guardar Reporte
                        </button>
                    </form>
                </div>

                {/* Log Display Column */}
                <div>
                     <SectionTitle>Historial de Reportes</SectionTitle>
                     <Alert type="info">
                        <strong>Gestión de Datos:</strong> Para una solución sencilla y gratuita, estos reportes pueden ser enviados a una hoja de cálculo de <strong>Google Sheets</strong>. Utilizando Google Apps Script, la hoja puede actuar como una base de datos y una API web, permitiendo almacenar y recuperar estos registros de forma segura.
                     </Alert>
                     <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                        {reports.length > 0 ? reports.map(report => (
                            <div key={report.id} className="bg-white p-4 rounded-lg shadow border border-slate-200">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-blue-700">{report.activity}</p>
                                        <p className="text-sm text-slate-500">{new Date(report.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} - {report.technician}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 mb-1">Evaluar</p>
                                        <StarRating rating={report.evaluation} onRate={(rating) => handleRate(report.id, rating)} />
                                    </div>
                                </div>
                                {report.observations && <p className="mt-2 text-sm bg-slate-50 p-2 rounded">{report.observations}</p>}
                            </div>
                        )) : (
                            <p className="text-center text-slate-500 mt-8">No hay reportes para este sistema todavía.</p>
                        )}
                     </div>
                </div>
            </div>

        </SectionWrapper>
    );
};
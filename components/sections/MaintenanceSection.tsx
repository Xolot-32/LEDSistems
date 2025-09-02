import React from 'react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { Alert } from '../ui/Alert';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

const Table: React.FC<{ headers: string[]; children: React.ReactNode }> = ({ headers, children }) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase tracking-wider">
                <tr>
                    {headers.map((header, i) => <th key={i} className="p-4 font-semibold">{header}</th>)}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {children}
            </tbody>
        </table>
    </div>
);

export const MaintenanceSection: React.FC = () => (
    <SectionWrapper title="Mantenimiento" icon="🔧">
        <SectionTitle>Mantenimiento Preventivo</SectionTitle>
        <p>Un mantenimiento regular asegura la longevidad y el rendimiento óptimo del sistema. Siga la siguiente tabla de planificación:</p>
        <Table headers={["Frecuencia", "Tarea", "Procedimiento"]}>
            <tr>
                <td className="p-4 font-medium">Mensual</td>
                <td className="p-4">Limpieza de ventilación</td>
                <td className="p-4">Usar aire comprimido para remover polvo del ventilador y rejillas.</td>
            </tr>
            <tr>
                <td className="p-4 font-medium">Trimestral</td>
                <td className="p-4">Verificar conexiones</td>
                <td className="p-4">Revisar apriete de terminales en la fuente y el controlador.</td>
            </tr>
            <tr>
                <td className="p-4 font-medium">Semestral</td>
                <td className="p-4">Inspección de fusibles</td>
                <td className="p-4">Verificar visualmente el estado de todos los fusibles de canal.</td>
            </tr>
            <tr>
                <td className="p-4 font-medium">Anual</td>
                <td className="p-4">Revisión general</td>
                <td className="p-4">Contactar al proveedor para un diagnóstico completo del sistema.</td>
            </tr>
        </Table>

        <SectionTitle>Diagramas de Componentes</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <ImagePlaceholder 
                title="Unidad de Control Principal" 
                caption="Figura 1: Desglose de componentes de la unidad de control, mostrando el microcontrolador ESP32, los puertos de salida, los portafusibles y el ventilador de refrigeración." 
            />
            <ImagePlaceholder 
                title="Fuente de Alimentación"
                caption="Figura 2: Identificación de terminales de la fuente de alimentación conmutada (Entrada AC, Salida DC) y puntos de ventilación clave."
            />
        </div>

        <SectionTitle>Reemplazo de Fusibles</SectionTitle>
        <Alert type="warning">
            <strong>Importante:</strong> Desconecte siempre la alimentación antes de manipular los fusibles. Use únicamente fusibles de 2A tipo europeo (5x20mm). Un valor incorrecto puede dañar el sistema.
        </Alert>
        <ol className="list-decimal list-inside space-y-2 mt-4">
            <li>Localice el fusible dañado (inspección visual del filamento).</li>
            <li>Retire el fusible girando el portafusibles.</li>
            <li>Instale el fusible nuevo del mismo valor.</li>
            <li>Reconecte la alimentación y verifique el canal.</li>
        </ol>

        <SectionTitle>Actualización de Firmware</SectionTitle>
        <Alert type="info">
            <strong>Desarrollo Continuo:</strong> El sistema recibe actualizaciones periódicas realizadas por el proveedor, que incluyen mejoras de estabilidad, nuevas funciones y optimizaciones. Las actualizaciones son programadas y no requieren intervención del usuario.
        </Alert>
    </SectionWrapper>
);

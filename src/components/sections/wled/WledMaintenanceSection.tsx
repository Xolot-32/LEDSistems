import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';
import { Alert } from '../../ui/Alert';
import { ImagePlaceholder } from '../../ui/ImagePlaceholder';

export const WledMaintenanceSection: React.FC = () => (
    <SectionWrapper title="Mantenimiento y Monitoreo" icon="🔧">
        <SectionTitle>Verificaciones Rutinarias</SectionTitle>
        <StyledList>
            <StyledListItem>
                <strong>Inspección Visual de Fusibles:</strong> Verifique periódicamente el estado de los fusibles a través de sus tubos de vidrio transparentes. Un filamento roto indica la necesidad de reemplazo e investigación de la causa.
            </StyledListItem>
            <StyledListItem>
                <strong>Estado de Ventilación:</strong> Asegúrese de que las áreas de ventilación del controlador y la fuente de alimentación estén libres de obstrucciones y acumulación de polvo.
            </StyledListItem>
            <StyledListItem>
                <strong>Verificación de Conexiones:</strong> Inspeccione visualmente las conexiones y verifique que los componentes no presenten signos de sobrecalentamiento (decoloración, olor a quemado).
            </StyledListItem>
        </StyledList>
        
        <SectionTitle>Diagramas de Componentes</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <ImagePlaceholder 
                title="Controlador de 7 Canales" 
                caption="Figura 1: Blueprint del controlador de 7 canales, destacando los 7 portafusibles de panel, los conectores de salida y el microcontrolador ESP32-WROOM." 
            />
            <ImagePlaceholder 
                title="Controlador de 2 Canales"
                caption="Figura 2: Blueprint del modelo compacto de 2 canales, mostrando su diseño y la ubicación de sus 2 portafusibles y el microcontrolador ESP32-C3."
            />
        </div>

        <SectionTitle>Procedimientos de Limpieza</SectionTitle>
        <Alert type="warning">Desconecte siempre el sistema de la corriente antes de realizar cualquier limpieza.</Alert>
        <StyledList ordered>
            <StyledListItem>Utilice una lata de <strong>aire comprimido</strong> para retirar el polvo acumulado en las rejillas de ventilación y los disipadores de calor.</StyledListItem>
            <StyledListItem>Limpie la carcasa exterior con un paño seco. No utilice líquidos ni productos abrasivos.</StyledListItem>
            <StyledListItem>Verifique que los portafusibles estén limpios y libres de corrosión.</StyledListItem>
        </StyledList>

        <SectionTitle>Actualización de Firmware (OTA)</SectionTitle>
        <p>
            WLED puede actualizarse de forma inalámbrica ("Over-The-Air"). En el menú de configuración (`Config > Security & Updates`), puede buscar nuevas versiones e instalarlas directamente desde la interfaz. Se recomienda hacer un respaldo de la configuración antes de actualizar.
        </p>

        <SectionTitle>Respaldo y Restauración</SectionTitle>
        <p>
            En la misma sección de `Security & Updates`, puede descargar un archivo JSON con toda la configuración (presets, segmentos, etc.) y restaurarlo si es necesario. Es una buena práctica guardar un respaldo después de realizar cambios importantes.
        </p>
    </SectionWrapper>
);
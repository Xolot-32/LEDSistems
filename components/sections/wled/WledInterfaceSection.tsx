
import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';
import { Alert } from '../../ui/Alert';

export const WledInterfaceSection: React.FC = () => (
    <SectionWrapper title="Interfaz de Usuario" icon="📱">
        <p>
            La interfaz web de WLED es el centro de control principal. Es responsive y se adapta a ordenadores, tabletas y teléfonos móviles.
        </p>

        <SectionTitle>Acceso a la Interfaz</SectionTitle>
        <p>
            Para acceder, simplemente abra la dirección IP del controlador en un navegador web en cualquier dispositivo conectado a la misma red Wi-Fi.
        </p>
        
        <SectionTitle>Componentes Principales de la Interfaz</SectionTitle>
        <StyledList>
            <StyledListItem>
                <strong>Panel de Control Principal:</strong> Permite el control rápido de encendido/apagado, brillo global, selección de color y efectos.
            </StyledListItem>
            <StyledListItem>
                <strong>Galería de Efectos:</strong> Una lista completa de todos los efectos dinámicos disponibles, con controles para ajustar su velocidad e intensidad.
            </StyledListItem>
            <StyledListItem>
                <strong>Gestión de Segmentos:</strong> Permite dividir la tira de LEDs en secciones virtuales (segmentos) para aplicarles diferentes colores, efectos o configuraciones de forma independiente. Cada canal físico se puede gestionar como un segmento.
            </StyledListItem>
            <StyledListItem>
                <strong>Presets:</strong> Permite guardar y cargar configuraciones completas (colores, efectos, segmentos) para recuperarlas fácilmente.
            </StyledListItem>
            <StyledListItem>
                <strong>Panel de Configuración (Config):</strong> Acceso a todas las configuraciones del sistema, como Wi-Fi, preferencias de LED (muy importante para el límite de corriente), sincronización, etc.
            </StyledListItem>
        </StyledList>

        <Alert type="info">
            Para más información detallada sobre todas las funciones de la interfaz, consulte la página oficial de WLED: <a href="https://kno.wled.ge/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">https://kno.wled.ge/</a>
        </Alert>
    </SectionWrapper>
);

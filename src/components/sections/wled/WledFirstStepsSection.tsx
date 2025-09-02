import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';
import { Alert } from '../../ui/Alert';

export const WledFirstStepsSection: React.FC = () => (
    <SectionWrapper title="Primeros Pasos" icon="🚀">
        <SectionTitle>Verificación de Componentes del Sistema</SectionTitle>
        <p>Antes de comenzar, asegúrese de tener:</p>
        <StyledList>
            <StyledListItem>Controlador WLED (modelo de 7 o 2 canales).</StyledListItem>
            <StyledListItem>Fuente de alimentación conmutada de 5V DC para la lógica del controlador.</StyledListItem>
            <StyledListItem>Fuente de alimentación de 5V-12V DC para las tiras LED (según el tipo de tira).</StyledListItem>
            <StyledListItem>Tiras de LED direccionables compatibles (ej. WS2812B, SK6812).</StyledListItem>
            <StyledListItem>Cables para realizar las conexiones.</StyledListItem>
        </StyledList>

        <SectionTitle>Encendido del Sistema</SectionTitle>
        <Alert type="info">
            El sistema no cuenta con un interruptor físico de encendido/apagado. Se activa automáticamente en cuanto recibe energía eléctrica.
        </Alert>
        <StyledList ordered>
            <StyledListItem>Conecte la fuente de alimentación conmutada a una toma de corriente de 110-220V AC.</StyledListItem>
            <StyledListItem>Verifique dos veces todas las conexiones antes de aplicar energía.</StyledListItem>
            <StyledListItem>El sistema se iniciará automáticamente. Los LEDs indicadores en la placa deberían encenderse.</StyledListItem>
            <StyledListItem>Al encender, el sistema cargará automáticamente la última configuración de iluminación que estaba activa antes de ser apagado (si existe).</StyledListItem>
        </StyledList>

        <SectionTitle>Acceso a la Interfaz de Usuario Web de WLED</SectionTitle>
        <p>
            Una vez que el controlador esté en su red, puede acceder a él desde cualquier dispositivo conectado a la misma red. Puede encontrar su dirección IP en la configuración de su router o usando una aplicación de escaneo de red.
        </p>
        <p className="mt-4">
            Ingrese esa dirección IP en su navegador para abrir la interfaz de control de WLED.
        </p>
    </SectionWrapper>
);
import React from 'react';
import { SectionWrapper, SectionTitle, SubTitle, StyledList, StyledListItem } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { Alert } from '../ui/Alert';

export const InterfaceSection: React.FC = () => (
    <SectionWrapper title="Interfaz de Usuario" icon="📱">
        <SectionTitle>Pantalla Principal de la Aplicación</SectionTitle>
        <p>La aplicación móvil desarrollada en Unity presenta una interfaz intuitiva con las siguientes secciones:</p>

        <SubTitle>1. Barra Superior</SubTitle>
        <StyledList>
            <StyledListItem><strong>Estado de conexión:</strong> Indica si está conectado al controlador vía Bluetooth.</StyledListItem>
            <StyledListItem><strong>Nivel de señal:</strong> Intensidad de la señal Bluetooth.</StyledListItem>
            <StyledListItem><strong>Menú:</strong> Acceso a configuración y opciones.</StyledListItem>
        </StyledList>

        <SubTitle>2. Control de Canales</SubTitle>
        <p>Vista principal con los 16 canales disponibles. Cada canal muestra:</p>
        <StyledList>
            <StyledListItem>Número de canal (1-16)</StyledListItem>
            <StyledListItem>Nivel de intensidad (0-100%)</StyledListItem>
            <StyledListItem>Estado (encendido/apagado)</StyledListItem>
        </StyledList>

        <SubTitle>3. Funciones de Control</SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            <FeatureCard title="Control Individual">
                <p>Ajuste de intensidad por canal mediante deslizador táctil. <strong>Función estable.</strong></p>
            </FeatureCard>
            <FeatureCard title="Control de Grupo (Beta)">
                <p>Control simultáneo de múltiples canales agrupados. <strong>En fase de pruebas.</strong></p>
            </FeatureCard>
            <FeatureCard title="Master Control (Beta)">
                <p>Ajuste global de todos los canales activos. <strong>En desarrollo continuo.</strong></p>
            </FeatureCard>
        </div>
        <Alert type="warning">
            <strong>Nota Beta:</strong> Las funciones de Control de Grupo, Master Control, Presets y Timer están en fase de pruebas y pueden presentar comportamientos inesperados. Se recomienda usar principalmente el control individual de canales.
        </Alert>
    </SectionWrapper>
);

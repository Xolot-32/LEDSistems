import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { FeatureCard, FeatureIcon } from '../ui/FeatureCard';
import { Alert } from '../ui/Alert';

export const IntroSection: React.FC = () => (
    <SectionWrapper title="Introducción" icon="📖">
        <p>
            Bienvenido al manual operativo del <strong>Sistema de Control de Iluminación LED</strong>. Este sistema representa una solución avanzada para el control inteligente de iluminación en espacios interiores, diseñado para operación autónoma con mínima intervención.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            <FeatureCard title={<><FeatureIcon>📱</FeatureIcon> <span>Control Inalámbrico</span></>}>
                <p>Gestión completa a través de aplicación móvil desarrollada en Unity, conectada vía Bluetooth.</p>
            </FeatureCard>
            <FeatureCard title={<><FeatureIcon>💡</FeatureIcon> <span>16 Canales</span></>}>
                <p>Control independiente de hasta 16 salidas de iluminación LED con precisión del 0-100%.</p>
            </FeatureCard>
            <FeatureCard title={<><FeatureIcon>✨</FeatureIcon> <span>11 Efectos Visuales</span></>}>
                <p>Efectos predefinidos como Respiración, Estrobo, Cascada, Fuego y más, totalmente personalizables.</p>
            </FeatureCard>
            <FeatureCard title={<><FeatureIcon>💾</FeatureIcon> <span>Memoria Persistente</span></>}>
                <p>El sistema guarda y restaura automáticamente la última configuración tras cortes de energía.</p>
            </FeatureCard>
            <FeatureCard title={<><FeatureIcon>🎨</FeatureIcon> <span>Grupos y Presets</span></>}>
                <p>Organice canales en grupos y guarde configuraciones. <strong>(Función Beta)</strong></p>
            </FeatureCard>
            <FeatureCard title={<><FeatureIcon>⏰</FeatureIcon> <span>Programación Horaria</span></>}>
                <p>Automatice eventos de iluminación basados en horarios. <strong>(Función Beta)</strong></p>
            </FeatureCard>
        </div>
        <Alert type="info">
            <strong>Nota:</strong> Las funciones de Grupos, Presets y Programación Horaria se encuentran actualmente en fase Beta y están en desarrollo continuo.
        </Alert>
    </SectionWrapper>
);
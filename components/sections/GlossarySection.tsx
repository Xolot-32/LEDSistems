import React from 'react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';

export const GlossarySection: React.FC = () => (
    <SectionWrapper title="Glosario de Términos" icon="📚">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            <FeatureCard title="Canal">
                <p>Salida individual del controlador que maneja una o más tiras LED conectadas en paralelo.</p>
            </FeatureCard>
            <FeatureCard title="PWM">
                <p>Modulación por Ancho de Pulso. Técnica para controlar la intensidad luminosa variando el ciclo de trabajo.</p>
            </FeatureCard>
            <FeatureCard title="ESP32">
                <p>Microcontrolador de doble núcleo que actúa como cerebro del sistema, procesando comandos y generando señales.</p>
            </FeatureCard>
            <FeatureCard title="Preset">
                <p>Configuración completa guardada de todos los canales y efectos, recuperable con un solo toque.</p>
            </FeatureCard>
            <FeatureCard title="Firmware">
                <p>Software embebido en el microcontrolador que controla todas las funciones del sistema.</p>
            </FeatureCard>
            <FeatureCard title="Duty Cycle">
                <p>Porcentaje del tiempo que la señal está activa, determina el brillo del LED.</p>
            </FeatureCard>
        </div>
    </SectionWrapper>
);

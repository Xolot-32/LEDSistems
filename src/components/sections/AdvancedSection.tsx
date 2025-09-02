import React from 'react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { Alert } from '../ui/Alert';

export const AdvancedSection: React.FC = () => (
    <SectionWrapper title="Funciones Avanzadas" icon="✨">
        <Alert type="warning">
            <strong>Funciones en Beta:</strong> Las funciones avanzadas descritas en esta sección están en desarrollo continuo y pueden presentar variaciones en su comportamiento.
        </Alert>

        <SectionTitle>Efectos Visuales Disponibles</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard title="🌊 Respiración">
                <p>Transición suave de encendido a apagado. Ajustable: velocidad (0.5-10s), intensidad mín/máx.</p>
            </FeatureCard>
            <FeatureCard title="⚡ Estrobo">
                <p>Parpadeo rápido para efectos dramáticos. Ajustable: frecuencia (1-50Hz), duty cycle.</p>
            </FeatureCard>
            <FeatureCard title="💧 Cascada">
                <p>Secuencia progresiva entre canales. Ajustable: velocidad, dirección, solapamiento.</p>
            </FeatureCard>
            <FeatureCard title="🔥 Fuego">
                <p>Simulación de llama con variaciones aleatorias. Ajustable: intensidad, velocidad.</p>
            </FeatureCard>
        </div>
        
        <SectionTitle>Propuestas de Mejora Futura</SectionTitle>
        <Alert type="info">
            <strong>Funciones en Consideración:</strong> Basándose en el uso del sistema, se evalúan las siguientes mejoras:
        </Alert>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard title="🎙️ Control por Voz">
                <p>Integración con asistentes de voz (Google Assistant, Alexa) para comandos básicos.</p>
            </FeatureCard>
            <FeatureCard title="📊 Análisis de Consumo">
                <p>Monitoreo en tiempo real del consumo eléctrico y estadísticas de uso.</p>
            </FeatureCard>
            <FeatureCard title="🌐 Control Remoto">
                <p>Acceso vía internet para control desde cualquier ubicación.</p>
            </FeatureCard>
            <FeatureCard title="🔄 Actualizaciones OTA">
                <p>Actualización de firmware por aire sin intervención física.</p>
            </FeatureCard>
        </div>
    </SectionWrapper>
);
import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';
import { FeatureCard, FeatureIcon } from '../../ui/FeatureCard';
import { Alert } from '../../ui/Alert';

export const WledIntroSection: React.FC = () => (
    <SectionWrapper title="Introducción" icon="📖">
        <p>
            Este manual proporciona las instrucciones necesarias para la instalación, configuración y operación segura de los controladores para tiras LED direccionables basados en el firmware de código abierto <strong>WLED</strong>. Está dirigido a instaladores, técnicos y usuarios finales con conocimientos básicos de electrónica.
        </p>
        <Alert type="info">
            <strong>Desarrollo Continuo:</strong> El sistema se encuentra en un proceso constante de desarrollo y optimización. Futuras versiones del firmware y del manual incluirán capacidades expandidas.
        </Alert>

        <SectionTitle>Descripción General</SectionTitle>
        <p>
            Estos controladores utilizan el potente y versátil firmware WLED, que permite un control detallado sobre tiras de LED direccionables a través de una red Wi-Fi. La interfaz web es accesible desde cualquier navegador y ofrece una amplia gama de efectos dinámicos, control de color, gestión por segmentos y la capacidad de guardar configuraciones personalizadas.
        </p>

        <SectionTitle>Modelos de Controlador Cubiertos</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard title={<><FeatureIcon>7️⃣</FeatureIcon><span>Alto Rendimiento de 7 Canales</span></>}>
                <p>Basado en el microcontrolador <strong>ESP32-WROOM</strong>, es la solución ideal para proyectos de gran escala que requieren controlar múltiples zonas de iluminación de forma independiente.</p>
            </FeatureCard>
            <FeatureCard title={<><FeatureIcon>2️⃣</FeatureIcon><span>Compacto de 2 Canales</span></>}>
                 <p>Utiliza el microcontrolador <strong>ESP32-C3</strong>, ofreciendo una solución más compacta y energéticamente eficiente para proyectos pequeños o de acento.</p>
            </FeatureCard>
        </div>

        <SectionTitle>Aplicaciones Recomendadas</SectionTitle>
        <StyledList>
            <StyledListItem><strong>Modelo de 7 Canales:</strong> Iluminación de fachadas, señalización digital, ambientación de locales comerciales, escenografías y proyectos residenciales complejos.</StyledListItem>
            <StyledListItem><strong>Modelo de 2 Canales:</strong> Iluminación bajo gabinetes, vitrinas, retroiluminación de televisores (Ambilight) y proyectos artísticos.</StyledListItem>
        </StyledList>
    </SectionWrapper>
);

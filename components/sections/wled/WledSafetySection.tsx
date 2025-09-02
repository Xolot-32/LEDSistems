import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';
import { Alert } from '../../ui/Alert';

export const WledSafetySection: React.FC = () => (
    <SectionWrapper title="Seguridad y Precauciones" icon="⚠️">
        <Alert type="danger">
            <strong>¡ADVERTENCIA!</strong> La incorrecta manipulación de componentes eléctricos puede causar daños al equipo, incendios o lesiones personales. Lea atentamente las siguientes indicaciones.
        </Alert>
        
        <SectionTitle>Normas y Estándares</SectionTitle>
        <StyledList>
            <StyledListItem>Estos controladores operan con voltajes de <strong>5V DC</strong> para la lógica y <strong>5V-12V</strong> para las tiras LED. Por precaución, no manipule el cableado con el sistema encendido.</StyledListItem>
            <StyledListItem>El sistema ha sido desarrollado bajo estándares de calidad para instalaciones eléctricas y de control de baja tensión.</StyledListItem>
            <StyledListItem>Cualquier modificación al hardware debe ser realizada por personal técnico cualificado.</StyledListItem>
        </StyledList>

        <SectionTitle>Advertencias Eléctricas Generales</SectionTitle>
        <StyledList>
            <StyledListItem><strong>Desconecte siempre la fuente de alimentación principal</strong> antes de realizar cualquier conexión o modificación en el sistema.</StyledListItem>
            <StyledListItem>Asegúrese de que la fuente de alimentación utilizada cumpla con las normativas de seguridad locales.</StyledListItem>
        </StyledList>

        <SectionTitle>Manejo de Corrientes Elevadas</SectionTitle>
        <p>Las tiras de LED pueden consumir una cantidad significativa de corriente. Utilice cables de un calibre adecuado para la carga prevista y asegúrese de que todas las conexiones sean firmes para evitar sobrecalentamientos.</p>

        <SectionTitle>Consideraciones de Ventilación</SectionTitle>
        <p>Los controladores y las fuentes de alimentación generan calor. Instálelos en un área con ventilación adecuada y evite cubrirlos o encerrarlos en espacios pequeños sin circulación de aire.</p>
        
        <SectionTitle>Protección Contra Descargas Electrostáticas (ESD)</SectionTitle>
        <Alert type="warning">
            Los microcontroladores son sensibles a la estática. Evite tocar los componentes electrónicos directamente y, si es posible, utilice una pulsera antiestática durante la instalación.
        </Alert>
    </SectionWrapper>
);

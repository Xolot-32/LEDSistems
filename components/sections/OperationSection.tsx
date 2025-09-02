import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { Alert } from '../ui/Alert';

export const OperationSection: React.FC = () => (
    <SectionWrapper title="Operación Básica del Sistema" icon="⚙️">
        <Alert type="info">
            <strong>Sistema Autónomo:</strong> El sistema está diseñado para funcionar de manera completamente autónoma. La intervención manual solo es necesaria para mantenimiento o cambios específicos solicitados.
        </Alert>
        <SectionTitle>Operación Normal</SectionTitle>
        <p>Durante la operación normal, el sistema:</p>
        <StyledList>
            <StyledListItem>Se enciende automáticamente al recibir alimentación eléctrica.</StyledListItem>
            <StyledListItem>Restaura la última configuración guardada.</StyledListItem>
            <StyledListItem>Ejecuta los efectos y programaciones configuradas.</StyledListItem>
            <StyledListItem>Guarda periódicamente el estado para recuperación ante cortes de energía.</StyledListItem>
        </StyledList>
        <SectionTitle>Apagado de Emergencia</SectionTitle>
        <p>En caso de emergencia o necesidad de apagado inmediato:</p>
        <StyledList ordered>
            <StyledListItem>Desconecte la fuente de alimentación de 12V.</StyledListItem>
            <StyledListItem>O desactive el interruptor general del circuito.</StyledListItem>
            <StyledListItem>El sistema se apagará inmediatamente.</StyledListItem>
            <StyledListItem>Al restaurar la energía, volverá a su configuración anterior.</StyledListItem>
        </StyledList>
    </SectionWrapper>
);

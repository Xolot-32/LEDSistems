import React, { useState, useCallback, useEffect } from 'react';
import type { Section } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { QuickActions } from './components/QuickActions';

// Import Section Components for "Sistema LED"
import { IntroSection } from './components/sections/IntroSection';
import { SafetySection } from './components/sections/SafetySection';
import { StartSection } from './components/sections/StartSection';
import { ProtectionSection } from './components/sections/ProtectionSection';
import { InterfaceSection } from './components/sections/InterfaceSection';
import { OperationSection } from './components/sections/OperationSection';
import { AdvancedSection } from './components/sections/AdvancedSection';
import { MaintenanceSection } from './components/sections/MaintenanceSection';
import { TroubleshootingSection } from './components/sections/TroubleshootingSection';
import { SpecsSection } from './components/sections/SpecsSection';
import { GlossarySection } from './components/sections/GlossarySection';
import { MaintenanceLogSection } from './components/sections/MaintenanceLogSection';

// Import Section Components for "Controladores WLED"
import { WledIntroSection } from './components/sections/wled/WledIntroSection';
import { WledSafetySection } from './components/sections/wled/WledSafetySection';
import { WledFirstStepsSection } from './components/sections/wled/WledFirstStepsSection';
import { WledProtectionSection } from './components/sections/wled/WledProtectionSection';
import { WledInterfaceSection } from './components/sections/wled/WledInterfaceSection';
import { WledMaintenanceSection } from './components/sections/wled/WledMaintenanceSection';
import { WledTroubleshootingSection } from './components/sections/wled/WledTroubleshootingSection';
import { WledSpecsSection } from './components/sections/wled/WledSpecsSection';
import { WledFutureDevelopmentSection } from './components/sections/wled/WledFutureDevelopmentSection';


const LED_SECTIONS: Section[] = [
    { id: 'intro', title: 'Introducción', icon: '📖', content: <IntroSection /> },
    { id: 'safety', title: 'Seguridad', icon: '⚠️', content: <SafetySection /> },
    { id: 'start', title: 'Primeros Pasos', icon: '🚀', content: <StartSection /> },
    { id: 'protection', title: 'Protecciones', icon: '🛡️', content: <ProtectionSection /> },
    { id: 'interface', title: 'Interfaz', icon: '📱', content: <InterfaceSection /> },
    { id: 'operation', title: 'Operación', icon: '⚙️', content: <OperationSection /> },
    { id: 'advanced', title: 'Funciones Avanzadas', icon: '✨', badge: 'Beta', content: <AdvancedSection /> },
    { id: 'maintenance', title: 'Mantenimiento', icon: '🔧', content: <MaintenanceSection /> },
    { id: 'troubleshooting', title: 'Solución de Problemas', icon: '🔨', content: <TroubleshootingSection /> },
    { id: 'specs', title: 'Especificaciones', icon: '📊', content: <SpecsSection /> },
    { id: 'glossary', title: 'Glosario', icon: '📚', content: <GlossarySection /> },
    { id: 'maintenance-log', title: 'Registro de Mantenimiento', icon: '📝', content: <MaintenanceLogSection systemName="Sistema LED" /> },
];

const WLED_SECTIONS: Section[] = [
    { id: 'wled-intro', title: 'Introducción', icon: '📖', content: <WledIntroSection /> },
    { id: 'wled-safety', title: 'Seguridad', icon: '⚠️', content: <WledSafetySection /> },
    { id: 'wled-start', title: 'Primeros Pasos', icon: '🚀', content: <WledFirstStepsSection /> },
    { id: 'wled-protection', title: 'Protecciones', icon: '🛡️', content: <WledProtectionSection /> },
    { id: 'wled-interface', title: 'Interfaz de Usuario', icon: '📱', content: <WledInterfaceSection /> },
    { id: 'wled-maintenance', title: 'Mantenimiento', icon: '🔧', content: <WledMaintenanceSection /> },
    { id: 'wled-troubleshooting', title: 'Solución de Problemas', icon: '🔨', content: <WledTroubleshootingSection /> },
    { id: 'wled-specs', title: 'Especificaciones', icon: '📊', content: <WledSpecsSection /> },
    { id: 'wled-future', title: 'Desarrollo Futuro', icon: '🔮', content: <WledFutureDevelopmentSection /> },
    { id: 'wled-maintenance-log', title: 'Registro de Mantenimiento', icon: '📝', content: <MaintenanceLogSection systemName="Controladores WLED" /> },
];

const App: React.FC = () => {
    const [activeSystem, setActiveSystem] = useState<'led' | 'wled'>('led');
    const [activeSectionId, setActiveSectionId] = useState<string>('intro');
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSystemChange = useCallback((system: 'led' | 'wled') => {
        setActiveSystem(system);
        const newSections = system === 'led' ? LED_SECTIONS : WLED_SECTIONS;
        setActiveSectionId(newSections[0].id);
        setSidebarOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleSectionChange = useCallback((id: string) => {
        setActiveSectionId(id);
        setSidebarOpen(false);
        // Don't scroll to top for anchor links within the same section content, if we implement that later
        if (!id.includes('#')) {
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    const handleSearch = (query: string) => {
        if (query.length < 3) return;
        const lowerQuery = query.toLowerCase();
        const sectionsToSearch = activeSystem === 'led' ? LED_SECTIONS : WLED_SECTIONS;

        const foundSection = sectionsToSearch.find(section => 
            section.title.toLowerCase().includes(lowerQuery)
        );

        if (foundSection) {
            handleSectionChange(foundSection.id);
        }
    };

    const currentSections = activeSystem === 'led' ? LED_SECTIONS : WLED_SECTIONS;
    const activeSection = currentSections.find(sec => sec.id === activeSectionId) || currentSections[0];

    if (isLoading) {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex justify-center items-center z-50">
                <div className="flex gap-4">
                    <div className="w-5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="w-5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen text-slate-700 font-sans">
            <Header 
                onSearch={handleSearch} 
                onMenuToggle={() => setSidebarOpen(!isSidebarOpen)}
                activeSystem={activeSystem}
                onSystemChange={handleSystemChange}
            />
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <Sidebar 
                        sections={currentSections} 
                        activeSectionId={activeSectionId}
                        onSectionChange={handleSectionChange}
                        isOpen={isSidebarOpen}
                    />
                    <main className="lg:col-span-3">
                        <Content section={activeSection} />
                    </main>
                </div>
            </div>
            <Footer />
            <QuickActions />
        </div>
    );
};

export default App;

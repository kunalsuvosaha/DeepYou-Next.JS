"use client";
import { motion } from 'framer-motion';

export default function Home({ onStart }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', paddingBottom: '2rem' }}
        >
            <motion.div variants={item} style={{ marginBottom: '3rem' }}>
                <h1 className="floating">Welcome to DeepYou</h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                    Peel back the layers of your mind. Discover the depths of your personality through our AI-powered psychological analysis. Choose your journey below. ✨
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
            }}>
                {/* 1. Core Personality Scan */}
                <motion.div
                    variants={item}
                    className="glass-card"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.8)' }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(168, 85, 247, 0.4)' }}
                >
                    <div style={{ fontSize: '3rem' }}>🧠</div>
                    <h3>Core Persona Scan</h3>
                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>A comprehensive overview</p>
                    <p style={{ flex: 1 }}>Dive deep into your core traits and understand what makes you unique.</p>
                    <button className="btn-primary" onClick={() => onStart('core')} style={{ width: '100%', marginTop: 'auto' }}>
                        Take the Test
                    </button>
                </motion.div>

                {/* 2. Introvert/Extrovert Spectrum */}
                <motion.div
                    variants={item}
                    className="glass-card"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.8)' }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(59, 130, 246, 0.4)' }}
                >
                    <div style={{ fontSize: '3rem' }}>🔋</div>
                    <h3>Social Energy</h3>
                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Introvert vs. Extrovert</p>
                    <p style={{ flex: 1 }}>Discover where you lie on the social energy spectrum and how to recharge.</p>
                    <button className="btn-primary" onClick={() => onStart('social')} style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
                        Take the Test
                    </button>
                </motion.div>

                {/* 3. Attachment Style */}
                <motion.div
                    variants={item}
                    className="glass-card"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.8)' }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(236, 72, 153, 0.4)' }}
                >
                    <div style={{ fontSize: '3rem' }}>🔗</div>
                    <h3>Attachment Style</h3>
                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Relationships & Connections</p>
                    <p style={{ flex: 1 }}>Secure, Anxious, Avoidant, or Disorganized? Learn how you connect.</p>
                    <button className="btn-primary" onClick={() => onStart('attachment')} style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)', boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)' }}>
                        Take the Test
                    </button>
                </motion.div>

                {/* 4. Emotional Baseline */}
                <motion.div
                    variants={item}
                    className="glass-card"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(16, 185, 129, 0.8)' }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(16, 185, 129, 0.4)' }}
                >
                    <div style={{ fontSize: '3rem' }}>🌧️</div>
                    <h3>Emotional Baseline</h3>
                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Anxious vs. Depressed</p>
                    <p style={{ flex: 1 }}>A self-discovery tool to map out your emotional baseline.</p>
                    <button className="btn-primary" onClick={() => onStart('emotional')} style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(135deg, #34d399 0%, #059669 100%)', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)' }}>
                        Take the Test
                    </button>
                </motion.div>

                {/* 5. The Vibe Check */}
                <motion.div
                    variants={item}
                    className="glass-card"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(245, 158, 11, 0.8)' }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(245, 158, 11, 0.4)' }}
                >
                    <div style={{ fontSize: '3rem' }}>🌊</div>
                    <h3>The Vibe Check</h3>
                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Chill vs. Stressed</p>
                    <p style={{ flex: 1 }}>Are you the chill dude/girl or the stress dude/girl? Let's find out.</p>
                    <button className="btn-primary" onClick={() => onStart('vibe')} style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)', boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)' }}>
                        Take the Test
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}

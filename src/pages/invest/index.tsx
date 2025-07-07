import {
    Box,
    Typography,
    Button,
    Avatar,
    Container,
    Link,
    Card,
    CardContent,
} from '@mui/material';
import {
    TrendingUp,
    Psychology,
    Gamepad,
    Speed,
    LinkedIn,
    GitHub,
} from '@mui/icons-material';

export const Invest = () => {
    const teamMembers = [
        {
            name: 'Amir Tarkian',
            role: 'AI Software Developer',
            company: 'HUDL',
            expertise: 'AI development, technical leadership',
            linkedin: 'https://www.linkedin.com/in/amirtarkian',
            github: 'https://github.com/amirtarkian',
            avatar: './amir-headshot.jpeg',
        },
        {
            name: 'Mikil Foss',
            role: 'ML Research Engineer',
            company: 'Oak Ridge National Lab',
            expertise: 'Machine learning research, advanced AI systems',
            linkedin: 'https://www.linkedin.com/in/mikil-foss/',
            github: 'https://github.com/mikilfoss',
            avatar: './mikil-headshot.jpeg',
        },
        {
            name: 'Owen Ratgen',
            role: 'Software Engineer',
            company: 'Masters in CS - Distributed Systems & AI',
            expertise: 'Distributed systems, AI architecture, full-stack development',
            linkedin: 'https://www.linkedin.com/in/owen-ratgen',
            github: 'https://github.com/owenratgen',
            avatar: './owen-headshot.jpeg',
        },
        {
            name: 'Mia Siner',
            role: 'Finance Manager',
            company: 'Creevo',
            expertise: 'Financial management, business operations',
            linkedin: 'https://www.linkedin.com/in/miasiner/',
            github: '',
            avatar: './mia-headshot.jpeg',
        },
    ];

    const keyMetrics = [
        {
            icon: <Psychology sx={{ fontSize: 40, color: '#8B5CF6' }} />,
            title: 'AI-Powered Development',
            description: 'Proprietary AI tools that accelerate game demo creation by 10x',
        },
        {
            icon: <Gamepad sx={{ fontSize: 40, color: '#06B6D4' }} />,
            title: 'Game Industry Focus',
            description: 'Specialized platform designed specifically for game developers and creators',
        },
        {
            icon: <Speed sx={{ fontSize: 40, color: '#8B5CF6' }} />,
            title: 'Rapid Prototyping',
            description: 'From concept to playable demo in days, not months',
        },
        {
            icon: <TrendingUp sx={{ fontSize: 40, color: '#06B6D4' }} />,
            title: 'Scalable Technology',
            description: 'Cloud-native architecture built to handle enterprise-level demand',
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: 4,
                    minHeight: '60vh',
                    mb: 14,
                    mt: 6,
                }}
            >
                <Typography variant="h1" sx={{ color: 'text.primary' }}>
                    Investing in the Future of Game Development
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 700,
                        mb: 4,
                        color: 'text.secondary',
                        fontSize: '1.2rem',
                        lineHeight: 1.6,
                    }}
                >
                    Creevo empowers developers to transform game ideas into playable demos using cutting-edge AI technology.
                    We're revolutionizing how games are prototyped and developed.
                </Typography>

                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        href="#contact-section"
                        sx={{ px: 4, py: 2 }}
                    >
                        Contact for Investment
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        href="#team-section"
                        sx={{ px: 4, py: 2 }}
                    >
                        Meet the Team
                    </Button>
                </Box>
            </Box>

            {/* Value Proposition Section */}
            <Box sx={{ textAlign: 'center', mb: 16 }}>
                <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
                    The Opportunity
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 800,
                        mx: 'auto',
                        mb: 6,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                    }}
                >
                    The game development industry is worth over $300 billion globally, yet most game ideas never become
                    reality due to the high cost and complexity of creating playable prototypes. Creevo solves this with
                    our proprietary AI toolchain that enables rapid demo creation for ideators, designers, and artists.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 4,
                        mt: 4,
                    }}
                >
                    {keyMetrics.map((metric, index) => (
                        <Card
                            key={index}
                            sx={{
                                p: 4,
                                height: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(139,92,246,0.15)',
                                boxShadow: '0 4px 24px rgba(139, 92, 246, 0.10)',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 48px rgba(139, 92, 246, 0.15)',
                                },
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Box sx={{ mb: 3 }}>
                                    {metric.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
                                >
                                    {metric.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                                >
                                    {metric.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

            {/* Technology Section */}
            <Box sx={{ textAlign: 'center', mb: 16 }}>
                <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
                    Our Technology
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 800,
                        mx: 'auto',
                        mb: 6,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                    }}
                >
                    At the core of Creevo is our proprietary AI system that understands game mechanics,
                    visual design, and player experience. Our internal tools can generate playable demos
                    from conceptual descriptions, dramatically reducing the time from idea to prototype.
                </Typography>

                <Box
                    sx={{
                        p: 6,
                        borderRadius: 4,
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(6,182,212,0.10) 100%)',
                        border: '1px solid rgba(139,92,246,0.15)',
                        boxShadow: '0 8px 32px rgba(139,92,246,0.15)',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}
                    >
                        AI-Driven Game Development Pipeline
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
                    >
                        Our platform bridges the gap between creative vision and technical implementation,
                        enabling game ideators, designers, and artists to create interactive prototypes
                        without extensive programming knowledge.
                    </Typography>
                </Box>
            </Box>

            {/* Team Section */}
            <Box
                id="team-section"
                sx={{ textAlign: 'center', mb: 16 }}
            >
                <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
                    World-Class AI Team
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 700,
                        mx: 'auto',
                        mb: 6,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                    }}
                >
                    Our founding team brings over 10 years of combined machine learning expertise
                    from leading tech companies and research institutions.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                        gap: 4,
                        maxWidth: 1000,
                        mx: 'auto',
                    }}
                >
                    {teamMembers.map((member, index) => (
                        <Box
                            key={index}
                            sx={{
                                textAlign: 'center',
                                p: 4,
                                borderRadius: 3,
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 48px rgba(139, 92, 246, 0.15)',
                                },
                            }}
                        >
                            <Avatar
                                src={member.avatar}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    mx: 'auto',
                                    mb: 3,
                                    background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                                    fontSize: '2rem',
                                    fontWeight: 600,
                                    boxShadow: '0 4px 24px rgba(139, 92, 246, 0.3)',
                                }}
                            >
                                {member.name.charAt(0)}
                            </Avatar>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                            >
                                {member.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ mb: 1, color: '#8B5CF6', fontWeight: 500 }}
                            >
                                {member.role}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ mb: 2, color: 'text.secondary', opacity: 0.8 }}
                            >
                                {member.company}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ mb: 3, color: 'text.secondary', fontSize: '0.8rem', fontStyle: 'italic' }}
                            >
                                {member.expertise}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 2,
                                }}
                            >
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <LinkedIn sx={{ fontSize: 24, color: '#8B5CF6' }} />
                                </Link>
                                <Link
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <GitHub sx={{ fontSize: 24, color: '#06B6D4' }} />
                                </Link>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Contact Section */}
            <Box
                id="contact-section"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    py: 8,
                    mb: 10,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.15) 100%)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    boxShadow: '0 8px 32px rgba(139,92,246,0.15)',
                }}
            >
                <Typography variant="h2" sx={{ mb: 3, color: 'text.primary' }}>
                    Ready to Invest in the Future?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        color: 'text.secondary',
                        maxWidth: 600,
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                    }}
                >
                    Join us in revolutionizing game development. We're looking for strategic investors
                    who understand the potential of AI in creative industries.
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '1.2rem',
                    }}
                >
                    Interested? Get in touch by contacting <span style={{ fontFamily: 'monospace', color: '#8B5CF6' }}>amir at creevo dot com</span>
                </Typography>
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    mt: 8,
                    py: 3,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 3,
                    color: 'rgba(255,255,255,0.7)',
                }}
            >
                <Typography variant="body2" sx={{ fontSize: '1rem', fontWeight: 500 }}>
                    © {new Date().getFullYear()} Creevo. All rights reserved.
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                    Investor Relations • amir at creevo dot com
                </Typography>
            </Box>
        </Container>
    );
}; 
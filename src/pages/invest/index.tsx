import {
    Box,
    Typography,
    Button,
    Container,
    Card,
    CardContent,
    Grid,
    Chip,
    Stack,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
} from '@mui/material';
import {
    RocketLaunch,
    AutoAwesome,
    Engineering,
    Verified,
    Speed,
    Psychology,
    Code,
    Check,
    StarRate,
    Groups,
} from '@mui/icons-material';

export const Invest = () => {
    const pricingTiers = [
        {
            name: 'Basic Demo',
            price: '$300',
            originalPrice: null,
            discount: null,
            demos: 1,
            popular: false,
            features: [
                '1.5-2 minute demo video',
                '5-10 minute playable demo',
                'Source code delivered',
                'Full quality assurance testing',
                'Money Back Guarantee',
                '2-week turnaround',
            ],
        },
        {
            name: 'Enhanced Demo',
            price: '$500',
            originalPrice: null,
            discount: null,
            demos: 1,
            popular: true,
            features: [
                '15-20 minutes of playable content',
                'Limited art asset creation (Done by an in house digital artist, never AI)',
                'Source code delivered',
                'Full quality assurance testing',
                'Money Back Guarantee',
                '2-week turnaround',
                'Priority support',
            ],
        },
        {
            name: 'Complete Package',
            price: '$1,000',
            originalPrice: null,
            discount: null,
            demos: 1,
            popular: false,
            features: [
                '15-20 minutes of playable content',
                'Complete art asset generation',
                'Basic marketing support',
                'Kickstarter page assistance',
                'Full quality assurance testing',
                'Source code delivered',
                'Money Back Guarantee',
                '2-week turnaround',
                'Priority support',
            ],
        },
    ];

    const howItWorksSteps = [
        {
            icon: <Psychology sx={{ fontSize: 48, color: '#8B5CF6' }} />,
            title: 'AI Handles the Heavy Lifting',
            description: 'Our proprietary AI tooling analyzes your game concept and automatically generates boilerplate code, basic game mechanics, and foundational systems. This covers 70-80% of the initial development work.',
        },
        {
            icon: <Engineering sx={{ fontSize: 48, color: '#06B6D4' }} />,
            title: 'Expert Human Guidance',
            description: 'A top-tier developer guides the overall technical approach, making architectural decisions and ensuring the demo aligns with industry best practices and your specific vision.',
        },
        {
            icon: <Verified sx={{ fontSize: 48, color: '#10B981' }} />,
            title: '100% Quality Guarantee',
            description: 'Our human developers verify that every demo meets our strict quality standards, ensuring smooth gameplay, polished features, and professional-grade deliverables. Whatever your game needs, we will make it happen. If for whatever reason you are not satisfied with the demo, we will refund 100% of your money within 24 hours.',
        },
    ];

    const features = [
        {
            icon: <Speed sx={{ fontSize: 32, color: '#8B5CF6' }} />,
            title: 'Lightning Fast',
            description: 'From concept to playable demo in just 2 weeks',
        },
        {
            icon: <AutoAwesome sx={{ fontSize: 32, color: '#06B6D4' }} />,
            title: 'AI-Powered',
            description: 'Cutting-edge AI handles the bulk development work',
        },
        {
            icon: <Code sx={{ fontSize: 32, color: '#10B981' }} />,
            title: 'Full Source Code',
            description: 'You own 100% of the code and can modify it freely',
        },
        {
            icon: <Groups sx={{ fontSize: 32, color: '#F59E0B' }} />,
            title: 'Expert Team',
            description: 'Top developer talent ensures professional quality',
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 12,
                    py: 8,
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(6,182,212,0.1) 100%)',
                    borderRadius: 4,
                    border: '1px solid rgba(139,92,246,0.2)',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        mb: 3,
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                    }}
                >
                    Turn Your Game Ideas Into Reality
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        mb: 4,
                        color: 'text.secondary',
                        maxWidth: 800,
                        mx: 'auto',
                        fontWeight: 400,
                        lineHeight: 1.6,
                    }}
                >
                    Professional game demos created with AI-powered development and expert human oversight.
                    From concept to playable prototype in just 2 weeks.
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                    <Chip
                        icon={<RocketLaunch />}
                        label="2-Week Delivery"
                        variant="outlined"
                        sx={{ borderColor: '#8B5CF6', color: '#8B5CF6' }}
                    />
                    <Chip
                        icon={<AutoAwesome />}
                        label="AI-Powered"
                        variant="outlined"
                        sx={{ borderColor: '#06B6D4', color: '#06B6D4' }}
                    />
                    <Chip
                        icon={<Verified />}
                        label="Quality Guaranteed"
                        variant="outlined"
                        sx={{ borderColor: '#10B981', color: '#10B981' }}
                    />
                </Stack>

                <Button
                    variant="contained"
                    size="large"
                    href="mailto:amir@creevo.app"
                    sx={{
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)',
                        }
                    }}
                >
                    Get Started Now
                </Button>
            </Box>

            {/* Features Section */}
            <Box sx={{ mb: 12 }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        color: 'text.primary',
                        fontWeight: 600,
                    }}
                >
                    Why Choose Creevo?
                </Typography>

                <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    p: 3,
                                    textAlign: 'center',
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 20px 40px rgba(139,92,246,0.2)',
                                    },
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                    {feature.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* How It Works Section */}
            <Box sx={{ mb: 12 }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 3,
                        color: 'text.primary',
                        fontWeight: 600,
                    }}
                >
                    How It Works
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: 'center',
                        mb: 8,
                        color: 'text.secondary',
                        maxWidth: 600,
                        mx: 'auto',
                        fontWeight: 400,
                    }}
                >
                    We combine proprietary AI tooling with top developer talent to deliver
                    professional-quality game demos quickly and efficiently.
                </Typography>

                <Grid container spacing={6} sx={{ maxWidth: 1200, mx: 'auto' }}>
                    {howItWorksSteps.map((step, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    textAlign: 'center',
                                    background: 'linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(6,182,212,0.05) 100%)',
                                    border: '1px solid rgba(139,92,246,0.1)',
                                    borderRadius: 3,
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -15,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: 30,
                                        height: 30,
                                        background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    {index + 1}
                                </Box>
                                <Box sx={{ mb: 3, mt: 2 }}>
                                    {step.icon}
                                </Box>
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                                    {step.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                    {step.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Pricing Section */}
            <Box id="pricing" sx={{ mb: 12 }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 3,
                        color: 'text.primary',
                        fontWeight: 600,
                    }}
                >
                    Simple, Transparent Pricing
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: 'center',
                        mb: 8,
                        color: 'text.secondary',
                        maxWidth: 600,
                        mx: 'auto',
                        fontWeight: 400,
                    }}
                >
                    Choose the package that fits your project needs. From basic demos to complete packages with art and marketing support.
                </Typography>

                <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
                    {pricingTiers.map((tier, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    position: 'relative',
                                    border: tier.popular ? '2px solid #8B5CF6' : '1px solid rgba(255,255,255,0.1)',
                                    background: tier.popular
                                        ? 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(6,182,212,0.1) 100%)'
                                        : 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: tier.popular
                                            ? '0 20px 40px rgba(139,92,246,0.3)'
                                            : '0 20px 40px rgba(0,0,0,0.2)',
                                    },
                                }}
                            >
                                {tier.popular && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: -1,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                                            color: 'white',
                                            px: 3,
                                            py: 1,
                                            borderRadius: '0 0 8px 8px',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                        }}
                                    >
                                        <StarRate sx={{ fontSize: 16 }} />
                                        MOST POPULAR
                                    </Box>
                                )}

                                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                        {tier.name}
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 700,
                                                color: tier.popular ? '#8B5CF6' : 'text.primary',
                                            }}
                                        >
                                            {tier.price}
                                        </Typography>
                                        {tier.originalPrice && (
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    textDecoration: 'line-through',
                                                    color: 'text.secondary',
                                                    mt: 1,
                                                }}
                                            >
                                                {tier.originalPrice}
                                            </Typography>
                                        )}
                                        {tier.discount && (
                                            <Chip
                                                label={`Save ${tier.discount}`}
                                                size="small"
                                                sx={{
                                                    mt: 1,
                                                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                                                    color: 'white',
                                                }}
                                            />
                                        )}
                                    </Box>

                                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                                        Professional Game Demo
                                    </Typography>

                                    <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

                                    <List sx={{ p: 0 }}>
                                        {tier.features.map((feature, featureIndex) => (
                                            <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <Check sx={{ fontSize: 20, color: '#10B981' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        variant: 'body2',
                                                        color: 'text.secondary',
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>

                                    <Button
                                        variant={tier.popular ? 'contained' : 'outlined'}
                                        fullWidth
                                        size="large"
                                        href="mailto:amir@creevo.app"
                                        sx={{
                                            mt: 4,
                                            py: 2,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            ...(tier.popular && {
                                                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)',
                                                },
                                            }),
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    py: 8,
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.15) 100%)',
                    borderRadius: 4,
                    border: '1px solid rgba(139,92,246,0.2)',
                }}
            >
                <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
                    Ready to Bring Your Game to Life?
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 4,
                        color: 'text.secondary',
                        maxWidth: 600,
                        mx: 'auto',
                        fontWeight: 400,
                    }}
                >
                    Join hundreds of game creators who've turned their ideas into playable demos.
                    Start your project today and see results in just 2 weeks.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    startIcon={<RocketLaunch />}
                    href="mailto:amir@creevo.app"
                    sx={{
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)',
                        }
                    }}
                >
                    Start Your Demo
                </Button>
            </Box>
        </Container>
    );
}; 
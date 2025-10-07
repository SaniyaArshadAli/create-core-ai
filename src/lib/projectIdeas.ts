export interface ProjectIdea {
  id: string;
  title: string;
  domain: string;
  description: string;
  challenge: string;
  targetAudience: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  keywords: string[];
}

export const projectIdeas: ProjectIdea[] = [
  // MedTech Projects
  {
    id: '1401',
    title: 'Predictive Veterinary Analysis for Animal Health',
    domain: 'MedTech',
    description: 'Build a predictive analytics system to monitor and analyze animal health data, helping veterinarians identify health issues early and make informed decisions for endangered species conservation.',
    challenge: 'Develop machine learning models to predict health complications in animals by analyzing veterinary data, medical history, and environmental factors. Help save endangered species through data-driven insights.',
    targetAudience: [
      'Veterinarians working with domestic and wild animals',
      'Animal healthcare providers and clinics',
      'Zoos, sanctuaries, and farms managing animal populations'
    ],
    level: 'Advanced',
    keywords: ['veterinary care', 'animal health analytics', 'predictive modeling', 'endangered species', 'machine learning', 'data science', 'wildlife conservation']
  },
  {
    id: '1402',
    title: 'Data-Driven Phobia Diagnosis Tool',
    domain: 'MedTech',
    description: 'Create an intelligent diagnostic tool to help psychologists identify phobia triggers and patterns, enabling personalized treatment strategies for anxiety disorders.',
    challenge: 'Apply data science to analyze patient data and build ML models that predict phobia triggers and severity patterns, helping therapists adjust treatment strategies effectively.',
    targetAudience: [
      'Clinical psychologists and mental health professionals',
      'Research institutions focused on anxiety disorders',
      'Behavioral therapists working with phobia patients'
    ],
    level: 'Intermediate',
    keywords: ['mental health', 'phobia diagnosis', 'anxiety disorders', 'clinical psychology', 'behavioral therapy', 'patient care', 'AI healthcare']
  },
  {
    id: '1403',
    title: 'Smart Allergy Diagnostic System',
    domain: 'MedTech',
    description: 'Develop a comprehensive allergy prediction system that analyzes patient history, symptoms, environmental factors, and genetic data to predict allergic reactions and autoimmune risks.',
    challenge: 'Create a diagnostic tool analyzing allergy tests, patient history, environmental influences, and genetics to predict reactions and provide prevention plans with early intervention strategies.',
    targetAudience: [
      'Immunologists and allergists',
      'Public health organizations working on allergy prevention',
      'Patients suffering from allergies and autoimmune disorders'
    ],
    level: 'Advanced',
    keywords: ['allergy diagnosis', 'immunology', 'predictive healthcare', 'autoimmune diseases', 'personalized medicine', 'health analytics']
  },
  {
    id: '1404',
    title: 'Platform for Gut Disorder Diagnosis and Remote Treatment',
    domain: 'MedTech',
    description: 'Build a data-driven platform for tracking and diagnosing gut health conditions like IBS, providing remote treatment plans and symptom monitoring for digestive disorders.',
    challenge: 'Develop a platform tracking IBS and gut health conditions by analyzing symptoms, lifestyle, gut microbiome data, and metabolism. Include symptom tracker for remote treatment adjustments.',
    targetAudience: [
      'Gastroenterologists and digestive health specialists',
      'Patients with IBS and digestive disorders',
      'Pharmaceutical companies developing digestive health products'
    ],
    level: 'Intermediate',
    keywords: ['gut health', 'IBS treatment', 'digestive disorders', 'telemedicine', 'microbiome analysis', 'gastroenterology', 'remote healthcare']
  },
  {
    id: '1405',
    title: 'Smart Pediatric Health Solution for Growth and Development',
    domain: 'MedTech',
    description: 'Create a comprehensive child health monitoring tool that tracks growth, nutrition, developmental milestones, and identifies potential health risks with predictive analytics.',
    challenge: 'Monitor children\'s overall health including growth, nutrition, and milestones. Use predictive models to assess long-term trends and recommend timely interventions for better outcomes.',
    targetAudience: [
      'Parents seeking data-driven insights into child development',
      'Hospitals and clinics improving pediatric monitoring',
      'Child nutritionists addressing growth disorders'
    ],
    level: 'Intermediate',
    keywords: ['pediatric care', 'child development', 'growth monitoring', 'nutrition analysis', 'preventive healthcare', 'family health']
  },
  
  // EdTech Projects
  {
    id: '1601',
    title: 'Social Media Learning Hub for Boomers',
    domain: 'EdTech',
    description: 'Design an educational platform teaching older adults and housewives to use social media for business, enabling them to create online shops, promote crafts, and generate income.',
    challenge: 'Create user-friendly digital tools for non-technical users to build online presence and generate income. Use ML models to provide social media strategy recommendations.',
    targetAudience: [
      'Older adults looking to earn income online',
      'Individuals with no technical experience wanting to use social media for business',
      'Small business owners and freelance service providers'
    ],
    level: 'Beginner',
    keywords: ['social media marketing', 'digital literacy', 'online business', 'e-commerce', 'financial independence', 'adult education', 'entrepreneurship']
  },
  {
    id: '1602',
    title: 'Automated Internship Management System',
    domain: 'EdTech',
    description: 'Build an end-to-end internship management system with real-time progress tracking, automated faculty assignments, fraud detection, and compliance checks for educational institutions.',
    challenge: 'Create a system managing the complete internship process with real-time tracking, centralized communication, automated reminders, and ML-based fraud detection.',
    targetAudience: [
      'College administrators and faculty members',
      'Students seeking transparent internship processes',
      'EdTech companies developing institutional tools'
    ],
    level: 'Advanced',
    keywords: ['internship management', 'academic administration', 'fraud detection', 'educational technology', 'student tracking', 'compliance monitoring']
  },
  {
    id: '1603',
    title: 'Soft Skills Development Platform',
    domain: 'EdTech',
    description: 'Develop an AI-powered platform for improving soft skills like communication, leadership, and emotional intelligence through real-time assessment, interactive sessions, and personalized feedback.',
    challenge: 'Build a smart platform assessing users\' soft skills, providing real-time feedback, and offering training through speech recognition, AI tools, and interactive activities.',
    targetAudience: [
      'Engineering students and professionals improving career skills',
      'Job seekers needing interview and communication skills',
      'Companies helping employees develop soft skills'
    ],
    level: 'Advanced',
    keywords: ['soft skills training', 'communication skills', 'leadership development', 'emotional intelligence', 'career growth', 'professional development']
  },
  {
    id: '1604',
    title: 'Food Ingredient Analysis and Health Awareness System',
    domain: 'EdTech',
    description: 'Create a food analysis system educating consumers about harmful ingredients, their health impacts, and safer alternatives to prevent diet-related chronic diseases.',
    challenge: 'Develop a system analyzing food ingredients and health risks. Use ML to predict health impacts from consumption trends and recommend healthier alternatives.',
    targetAudience: [
      'Health-conscious individuals seeking safer dietary options',
      'Food industry professionals innovating healthier products',
      'Health organizations reducing diet-related diseases'
    ],
    level: 'Intermediate',
    keywords: ['nutrition education', 'food safety', 'health awareness', 'dietary analysis', 'chronic disease prevention', 'consumer health']
  },
  {
    id: '1605',
    title: 'Fabric Knowledge and Learning Platform for Fashion Students',
    domain: 'EdTech',
    description: 'Build a data-driven educational platform helping fashion design students understand fabric properties, make better material choices, and improve design confidence.',
    challenge: 'Transform fabric education by analyzing assignments, designs, and fabric details. Create personalized learning paths and predict student performance for better fabric selection.',
    targetAudience: [
      'Fashion design students learning fabric selection',
      'Fashion educators improving teaching methods',
      'EdTech professionals developing creative design tools'
    ],
    level: 'Beginner',
    keywords: ['fashion education', 'textile knowledge', 'design learning', 'material science', 'creative education', 'personalized learning']
  },
  
  // FinTech Projects
  {
    id: '1301',
    title: 'Student Finance Management and Loan Repayment Platform',
    domain: 'FinTech',
    description: 'Develop a financial analytics platform helping students manage loans, forecast repayment timelines, and access financial support with data-driven recommendations.',
    challenge: 'Build ML models forecasting realistic loan repayment timelines. Analyze student financial data to provide recommendations for debt management and financial aid options.',
    targetAudience: [
      'Students worldwide with active loans',
      'Recent graduates struggling with loan repayment',
      'Parents helping students with financial planning'
    ],
    level: 'Intermediate',
    keywords: ['student loans', 'debt management', 'financial planning', 'loan repayment', 'education finance', 'financial literacy']
  },
  {
    id: '1302',
    title: 'Financial Planning Tool for Life Goals',
    domain: 'FinTech',
    description: 'Create a recommendation tool analyzing users\' financial situations to help them set and achieve life goals like buying a car or home through smart EMI planning.',
    challenge: 'Develop a tool analyzing financial situations, estimating major costs, calculating EMI requirements, and determining suitable repayment timelines for life goals.',
    targetAudience: [
      'Individuals managing family finances and big purchases',
      'People needing help with budgeting and saving',
      'Financial advisors offering personal finance tools'
    ],
    level: 'Intermediate',
    keywords: ['financial planning', 'goal setting', 'EMI calculator', 'budgeting', 'personal finance', 'wealth management', 'savings strategy']
  },
  {
    id: '1303',
    title: 'Smart Auditing System for Fraud Prevention',
    domain: 'FinTech',
    description: 'Build an automated auditing system for banks and corporations that continuously scans high-volume transactions to detect fraud, anomalies, and discrepancies in real-time.',
    challenge: 'Create an automated system scanning high-volume transactions, flagging anomalies and discrepancies. Use ML to identify suspicious patterns and prevent financial fraud.',
    targetAudience: [
      'Large banks handling high-volume transactions',
      'Corporate financial departments managing cash flows',
      'Financial auditors seeking automated fraud detection'
    ],
    level: 'Advanced',
    keywords: ['fraud detection', 'financial auditing', 'transaction monitoring', 'anomaly detection', 'cybersecurity', 'compliance', 'risk management']
  },
  {
    id: '1304',
    title: 'Financial Analysis Tool for Retail Outlets',
    domain: 'FinTech',
    description: 'Develop a comprehensive financial management system for retail stores to optimize sales tracking, inventory management, and profitability with AI-driven insights.',
    challenge: 'Build a system helping retail outlets optimize financial management by identifying patterns in sales, inventory, and profitability to reduce wastage and improve efficiency.',
    targetAudience: [
      'Retail managers handling high transaction volumes',
      'Store owners optimizing inventory and profits',
      'Businesses reducing waste and improving efficiency'
    ],
    level: 'Intermediate',
    keywords: ['retail analytics', 'inventory optimization', 'sales forecasting', 'profit maximization', 'supply chain', 'business intelligence']
  },
  {
    id: '1305',
    title: 'Virtual Chartered Accountant for Small Businesses',
    domain: 'FinTech',
    description: 'Design a virtual CA system automating bookkeeping, cash flow management, and tax handling for small businesses and startups with AI-powered financial insights.',
    challenge: 'Automate routine bookkeeping tasks, manage cash flow, and provide real-time financial guidance with customized tips for small business owners.',
    targetAudience: [
      'Small business owners and startup founders',
      'Entrepreneurs without accounting expertise',
      'Financial advisors offering automated services'
    ],
    level: 'Advanced',
    keywords: ['accounting automation', 'small business finance', 'bookkeeping', 'tax management', 'cash flow', 'startup finance', 'financial advisor AI']
  },
  
  // AgroTech Projects
  {
    id: '1501',
    title: 'Ayurvedic and Medicinal Plants Recommendation Platform',
    domain: 'AgroTech',
    description: 'Create a platform recommending medicinal plants and Ayurvedic remedies based on health profiles, seasonal factors, and wellness goals with scientifically validated safety guidelines.',
    challenge: 'Design a platform where users input health profiles to receive personalized medicinal plant recommendations with images, benefits, and safety guidelines using ML models.',
    targetAudience: [
      'Health-conscious individuals seeking natural wellness',
      'Ayurvedic practitioners providing plant-based guidance',
      'Natural health enthusiasts exploring alternative remedies'
    ],
    level: 'Intermediate',
    keywords: ['ayurveda', 'medicinal plants', 'herbal medicine', 'natural wellness', 'alternative medicine', 'health recommendations', 'plant-based healing']
  },
  {
    id: '1502',
    title: 'Smart Crop Breeding Recommendation System',
    domain: 'AgroTech',
    description: 'Build a crop breeding recommendation system helping farmers optimize yields in challenging conditions by suggesting drought-resistant and high-yield crop varieties.',
    challenge: 'Develop a system taking inputs like crop type, soil, climate, and environment to generate image-based crop variety recommendations using ML for optimal yield.',
    targetAudience: [
      'Farmers in drought-prone regions',
      'Agricultural researchers working on crop development',
      'Agricultural extension officers advising farmers'
    ],
    level: 'Advanced',
    keywords: ['crop breeding', 'agriculture optimization', 'drought resistance', 'sustainable farming', 'crop yield', 'climate adaptation', 'precision agriculture']
  },
  {
    id: '1503',
    title: 'Sustainable Farming Practices Platform',
    domain: 'AgroTech',
    description: 'Develop a recommendation platform promoting sustainable farming through crop rotation and organic methods, analyzing soil conditions, pest patterns, and climate data.',
    challenge: 'Create a platform analyzing soil, pests, and climate to recommend crop rotation cycles and organic inputs that restore soil health and maximize sustainable yield.',
    targetAudience: [
      'Farmers facing soil degradation and contamination',
      'Agricultural experts promoting sustainable practices',
      'Organic farming advocates supporting chemical-free methods'
    ],
    level: 'Intermediate',
    keywords: ['sustainable agriculture', 'organic farming', 'crop rotation', 'soil health', 'environmental conservation', 'green farming', 'ecological balance']
  },
  {
    id: '1504',
    title: 'Flower Market Analysis and Forecasting',
    domain: 'AgroTech',
    description: 'Create a market analysis tool for flower sellers to identify demand trends, optimize inventory, target customers, and forecast seasonal patterns for maximum profitability.',
    challenge: 'Analyze flower market data to identify high-demand flowers, customer segments, and profitable varieties. Use ML to predict demand patterns and reduce inventory waste.',
    targetAudience: [
      'Flower sellers optimizing inventory',
      'Agricultural producers growing market-demand flowers',
      'Retail customers seeking fresh seasonal flowers'
    ],
    level: 'Beginner',
    keywords: ['flower market', 'demand forecasting', 'inventory management', 'seasonal trends', 'market analysis', 'agricultural commerce', 'retail optimization']
  },
  {
    id: '1505',
    title: 'Demand Forecasting and Inventory Optimization for Markets',
    domain: 'AgroTech',
    description: 'Build a demand forecasting system for fruit and vegetable markets that predicts demand using historical sales, weather patterns, and market trends to minimize waste.',
    challenge: 'Analyze sales data, weather patterns, and market trends to predict future demand accurately. Optimize stock levels to minimize waste and improve profitability.',
    targetAudience: [
      'Fresh produce vendors and wholesalers',
      'Agricultural businesses in logistics and supply chain',
      'Retailers and farmers minimizing waste'
    ],
    level: 'Advanced',
    keywords: ['demand forecasting', 'inventory optimization', 'supply chain', 'food waste reduction', 'market prediction', 'agricultural logistics', 'sales analytics']
  }
];

export const domains = ['All', 'MedTech', 'EdTech', 'FinTech', 'AgroTech'];
export const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

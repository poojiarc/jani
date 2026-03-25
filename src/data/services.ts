import { Leaf, Package, Tractor, ShieldCheck, Users } from "lucide-react";
import agriInputsImg from "@/assets/serv-agri-inputs.png";
import cattleFeedImg from "@/assets/serv-cattle-feed.png";
import cropProtectionImg from "@/assets/serv-crop-protection.png";
import fieldAdvisory from "@/assets/field-advisory.jpg";
import farmerSupport from "@/assets/farmer-support.jpg";

export const services = [
  {
    slug: "agricultural-inputs",
    icon: Leaf,
    title: "Agricultural Inputs Supply",
    image: agriInputsImg,
    shortDesc: "Pesticides, Fertilizers, Seeds & more",
    desc: "We provide a complete range of high-quality agricultural inputs to support farmers at every stage of crop growth. Our products are sourced from trusted brands and undergo quality checks to ensure maximum effectiveness and safety for your crops.",
    items: [
      "Pesticides: Effective solutions for controlling insects, pests, and crop damage. We stock a wide variety of insecticides suitable for different crops and pest types.",
      "Fungicides: Preventive and curative products to manage fungal diseases. Our range covers both contact and systemic fungicides for comprehensive protection.",
      "Bulk Fertilizers: NPK and customized nutrient solutions in large quantities. We offer competitive pricing for bulk orders to help reduce farming costs.",
      "Water Soluble Fertilizers (WSF): High-efficiency nutrients for drip irrigation and foliar application. Ideal for precision farming and controlled nutrient delivery.",
      "Seeds: High-yielding and certified seeds suited for local conditions. We carry vegetable, cereal, and pulse seeds from leading seed companies.",
      "Micronutrients & Growth Promoters: Zinc, Boron, Humic Acid, Amino Acids, and other essential elements to boost plant health and growth.",
      "Quality Assurance: Only trusted brands and tested products supplied. We ensure every product meets quality standards before reaching the farmer.",
    ],
  },
  {
    slug: "cattle-feed",
    icon: Package,
    title: "Cattle Feed & Nutrition",
    image: cattleFeedImg,
    shortDesc: "Quality nutrition for livestock health",
    desc: "We support livestock farmers with reliable and nutritious feed solutions designed to improve animal health, milk yield, and overall productivity. Our cattle feed range covers daily feeding needs as well as specialized nutritional supplements.",
    items: [
      "Bhusa (Dry Fodder): Clean and quality wheat straw for daily feeding. Sourced from reliable suppliers to ensure consistency and hygiene.",
      "Chakke (Oil Cakes): Protein-rich supplements like groundnut cake, cottonseed cake, and mustard cake for balanced nutrition.",
      "Balanced Cattle Feed: Scientifically formulated feed for improved milk yield and overall animal health. Available in multiple grades.",
      "Mineral Mixtures: Essential nutrients for improved immunity, reproduction, and bone strength in cattle.",
      "Feed Supplements: Calcium, vitamins, and digestive enhancers to support optimal animal performance.",
      "Customized Feed Guidance: Personalized recommendations based on cattle type, age, breed, and production goals.",
      "Consistent Supply: Regular availability in bulk quantities with timely delivery to ensure uninterrupted feeding schedules.",
    ],
  },
  {
    slug: "field-advisory",
    icon: Tractor,
    title: "Field Visits & Crop Advisory",
    image: fieldAdvisory,
    shortDesc: "On-site visits and expert crop guidance",
    desc: "Our expert team provides on-ground support to farmers through regular field visits. We believe that understanding the actual field conditions is essential to providing the right advice and solutions. Our agronomists work directly with farmers to address challenges at every stage of the crop cycle.",
    items: [
      "Crop Health Analysis: Regular inspection of crop condition, growth stage, and overall plant vigor to identify issues early.",
      "Soil & Nutrient Assessment: Recommendations based on soil condition, pH levels, and nutrient availability for optimal crop nutrition.",
      "Pest & Disease Identification: Early detection and accurate identification to prevent crop loss and recommend timely interventions.",
      "Stage-wise Advisory: Comprehensive guidance from land preparation and sowing through to harvesting and post-harvest management.",
      "On-field Demonstrations: Practical demonstrations on proper usage of fertilizers, chemicals, and modern farming techniques.",
      "Weather-based Recommendations: Adjusting farming practices based on climate conditions, rainfall patterns, and seasonal forecasts.",
      "Personalized Solutions: Tailored advice for each farmer's specific field conditions, crop variety, and local challenges.",
    ],
  },
  {
    slug: "crop-protection",
    icon: ShieldCheck,
    title: "Crop Protection Solutions",
    image: cropProtectionImg,
    shortDesc: "Effective pest and disease control",
    desc: "We provide scientifically backed crop protection strategies to safeguard your crops from pests, diseases, and weeds. Our recommendations are based on thorough field assessment and consider factors like crop type, season, pest lifecycle, and environmental conditions to deliver maximum effectiveness.",
    items: [
      "Pesticide Recommendations: Customized solutions based on pest type, infestation level, and crop sensitivity. We help you choose the right product for the right problem.",
      "Fungicide Planning: Preventive and curative spray schedules designed to protect crops throughout their growth cycle against fungal infections.",
      "Herbicide Usage: Effective weed control solutions including pre-emergent and post-emergent herbicides for clean and healthy crop stands.",
      "Integrated Pest Management (IPM): Sustainable and balanced approach combining biological, cultural, and chemical methods for long-term pest control.",
      "Correct Dosage Guidance: Precise dosage recommendations to avoid overuse, reduce costs, and ensure safety for crops and the environment.",
      "Application Techniques: Expert advice on spraying methods, nozzle selection, and timing for maximum effectiveness and coverage.",
      "Seasonal Planning: Crop protection calendar tailored to your region and crop variety for proactive pest and disease management.",
    ],
  },
  {
    slug: "farmer-support",
    icon: Users,
    title: "Farmer Follow-up & Support",
    image: farmerSupport,
    shortDesc: "Continuous engagement & care",
    desc: "We ensure continuous support beyond product supply. At Janicaa Agro, we believe that the relationship with the farmer doesn't end at the point of sale. We maintain regular contact, monitor crop progress, and provide ongoing guidance to help farmers achieve the best possible outcomes from their farming activities.",
    items: [
      "Regular Follow-ups: Stay connected with farmers throughout the crop cycle with scheduled visits and phone consultations.",
      "Progress Monitoring: Track crop performance, growth milestones, and improvement over time to measure the impact of our recommendations.",
      "Problem Resolution: Immediate on-call and on-field support for pest outbreaks, disease identification, or nutrient deficiency issues.",
      "Yield Improvement Guidance: Continuous advisory focused on maximizing productivity through better practices and timely interventions.",
      "Relationship Building: Long-term trust and farmer engagement built through consistent support, reliability, and genuine care.",
      "Feedback Collection: Understanding farmer challenges, concerns, and requirements to continuously improve our products and services.",
      "On-call Support: Quick assistance whenever needed — our team is just a phone call away for urgent farming queries.",
    ],
  },
];

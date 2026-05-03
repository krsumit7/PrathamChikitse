export enum EmergencyType {
  SNAKE_BITE = "snake_bite",
  HEART_ATTACK = "heart_attack",
  CHOKING = "choking",
  BURNS = "burns",
  FRACTURE = "fracture",
  BLEEDING = "bleeding",
  ELECTRIC_SHOCK = "electric_shock",
  HEAT_STROKE = "heat_stroke",
  DROWNING = "drowning",
  SEIZURES = "seizures",
  POISONING = "poisoning",
  ASTHMA_ATTACK = "asthma_attack",
  ALLERGIC_REACTION = "allergic_reaction",
  STROKE = "stroke",
  HEAD_INJURY = "head_injury",
  FAINTING = "fainting",
  DIABETIC_EMERGENCY = "diabetic_emergency",
  SPINAL_INJURY = "spinal_injury",
  SPRAINS = "sprains",
  EYE_INJURY = "eye_injury"
}

export interface Step {
  en: string;
  kn: string;
}

export interface EmergencyInfo {
  id: EmergencyType;
  title: { en: string; kn: string };
  icon: string;
  steps: Step[];
  dos: Step[];
  donts: Step[];
}

export const emergencies: EmergencyInfo[] = [
  {
    id: EmergencyType.SNAKE_BITE,
    title: { en: "Snake Bite", kn: "ಹಾವಿನ ಕಡಿತ" },
    icon: "Snake",
    steps: [
      { en: "Keep the person calm and still.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಶಾಂತವಾಗಿ ಮತ್ತು ಸ್ತಬ್ಧವಾಗಿ ಇರಿಸಿ." },
      { en: "Remove any tight clothing or jewelry.", kn: "ಬಿಗಿಯಾದ ಬಟ್ಟೆ ಅಥವಾ ಆಭರಣಗಳನ್ನು ತೆಗೆದುಹಾಕಿ." },
      { en: "Keep the bitten area below heart level.", kn: "ಕಚ್ಚಿದ ಭಾಗವನ್ನು ಹೃದಯದ ಮಟ್ಟಕ್ಕಿಂತ ಕೆಳಗೆ ಇರಿಸಿ." },
      { en: "Clean the wound with water, but do not flush it.", kn: "ಗಾಯವನ್ನು ನೀರಿನಿಂದ ಸ್ವಚ್ಛಗೊಳಿಸಿ, ಆದರೆ ಹೆಚ್ಚು ಒತ್ತಡದಿಂದ ತೊಳೆಯಬೇಡಿ." }
    ],
    dos: [
      { en: "Call emergency services immediately.", kn: "ತಕ್ಷಣ ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ." },
      { en: "Remember the snake's appearance if possible.", kn: "ಸಾಧ್ಯವಾದರೆ ಹಾವಿನ ಆಕಾರವನ್ನು ನೆನಪಿನಲ್ಲಿಡಿ." }
    ],
    donts: [
      { en: "Do not cut the wound or try to suck out venom.", kn: "ಗಾಯವನ್ನು ಕತ್ತರಿಸಬೇಡಿ ಅಥವಾ ವಿಷವನ್ನು ಹೀರಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ." },
      { en: "Do not use a tourniquet or ice.", kn: "ಟೂರ್ನಿಕೆಟ್ ಅಥವಾ ಐಸ್ ಬಳಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.HEART_ATTACK,
    title: { en: "Heart Attack", kn: "ಹೃದಯಾಘಾತ" },
    icon: "HeartPulse",
    steps: [
      { en: "Sit the person down and keep them calm.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಕುಳಿತುಕೊಳ್ಳುವಂತೆ ಮಾಡಿ ಮತ್ತು ಶಾಂತವಾಗಿರಿಸಿ." },
      { en: "Loosen any tight clothing.", kn: "ಬಿಗಿಯಾದ ಬಟ್ಟೆಗಳನ್ನು ಸಡಿಲಗೊಳಿಸಿ." },
      { en: "Ask if they carry chest pain medication.", kn: "ಅವರು ಎದೆನೋವಿನ ಔಷಧಿಯನ್ನು ಹೊಂದಿದ್ದಾರೆಯೇ ಎಂದು ಕೇಳಿ." },
      { en: "Start CPR if they become unconscious.", kn: "ಅವರು ಪ್ರಜ್ಞೆ ತಪ್ಪಿದರೆ ಸಿಪಿಆರ್ (CPR) ಪ್ರಾರಂಭಿಸಿ." }
    ],
    dos: [
      { en: "Call for an ambulance immediately.", kn: "ತಕ್ಷಣ ಅಂಬ್ಯುಲೆನ್ಸ್ ಗೆ ಕರೆ ಮಾಡಿ." },
      { en: "Follow dispatcher instructions.", kn: "ಡಿಸ್ಪ್ಯಾಚರ್ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸಿ." }
    ],
    donts: [
      { en: "Do not leave the person alone.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಒಬ್ಬರೇ ಬಿಡಬೇಡಿ." },
      { en: "Do not give them anything to eat or drink.", kn: "ಅವರಿಗೆ ತಿನ್ನಲು ಅಥವಾ ಕುಡಿಯಲು ಏನನ್ನೂ ಕೊಡಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.CHOKING,
    title: { en: "Choking", kn: "ಗಂಟಲಲ್ಲಿ ಏನಾದರೂ ಸಿಕ್ಕಿಹಾಕಿಕೊಳ್ಳುವುದು" },
    icon: "Wind",
    steps: [
      { en: "Ask 'Are you choking?'", kn: "'ನಿಮಗೆ ಗಂಟಲಲ್ಲಿ ಏನಾದರೂ ಸಿಲುಕಿದೆಯೇ?' ಎಂದು ಕೇಳಿ." },
      { en: "Encourage them to cough hard.", kn: "ಜೋರಾಗಿ ಕೆಮ್ಮಲು ಪ್ರೋತ್ಸಾಹಿಸಿ." },
      { en: "Perform 5 back blows between shoulder blades.", kn: "ಭುಜದ ಬ್ಲೇಡ್‌ಗಳ ನಡುವೆ 5 ಬಾರಿ ಬೆನ್ನಿಗೆ ತಟ್ಟಿ." },
      { en: "Perform 5 abdominal thrusts (Heimlich maneuver).", kn: "ಹೈಮ್ಲಿಚ್ ಕುಶಲತೆಯನ್ನು (5 ಬಾರಿ ಹೊಟ್ಟೆಯ ಮೇಲೆ ತಳ್ಳುವುದು) ಮಾಡಿ." }
    ],
    dos: [
      { en: "Repeat back blows and abdominal thrusts until clear.", kn: "ಸಿಲುಕಿದ ವಸ್ತು ಹೊರಬರುವವರೆಗೆ ಹಂತಗಳನ್ನು ಪುನರಾವರ್ತಿಸಿ." },
      { en: "Call emergency if they lose consciousness.", kn: "ಅವರು ಪ್ರಜ್ಞೆ ತಪ್ಪಿದರೆ ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ." }
    ],
    donts: [
      { en: "Do not try to reach for the object blindly.", kn: "ವಸ್ತುವನ್ನು ಕುರುಡಾಗಿ ಹಿಡಿಯಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ." },
      { en: "Do not give them water initially.", kn: "ಆರಂಭದಲ್ಲಿ ಅವರಿಗೆ ನೀರು ಕೊಡಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.BURNS,
    title: { en: "Burns", kn: "ಸುಟ್ಟ ಗಾಯಗಳು" },
    icon: "Flame",
    steps: [
      { en: "Run cool (not cold) water over the burn for 10-20 min.", kn: "10-20 ನಿಮಿಷಗಳ ಕಾಲ ತಣ್ಣನೆಯ (ಐಸ್ ನೀರಲ್ಲ) ನೀರನ್ನು ಗಾಯದ ಮೇಲೆ ಬಿಡಿ." },
      { en: "Remove jewelry or clothing near the burn area.", kn: "ಸುಟ್ಟ ಜಾಗದ ಹತ್ತಿರವಿರುವ ಆಭರಣ ಅಥವಾ ಬಟ್ಟೆಯನ್ನು ತೆಗೆದುಹಾಕಿ." },
      { en: "Cover the burn loosely with a sterile bandage.", kn: "ಗಾಯವನ್ನು ಸಡಿಲವಾಗಿ ಸ್ಟೆರೈಲ್ ಬ್ಯಾಂಡೇಜ್‌ನಿಂದ ಮುಚ್ಚಿ." }
    ],
    dos: [
      { en: "Keep the burned area elevated if possible.", kn: "ಸಾಧ್ಯವಾದರೆ ಸುಟ್ಟ ಭಾಗವನ್ನು ಎತ್ತರದಲ್ಲಿ ಇರಿಸಿ." },
      { en: "Seek medical help for severe burns.", kn: "ತೀವ್ರವಾದ ಸುಟ್ಟ ಗಾಯಗಳಿಗೆ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಪಡೆಯಿರಿ." }
    ],
    donts: [
      { en: "Do not use ice, butter, or ointments on the burn.", kn: "ಸುಟ್ಟ ಗಾಯದ ಮೇಲೆ ಐಸ್, ಬೆಣ್ಣೆ ಅಥವಾ ಮುಲಾಮುಗಳನ್ನು ಬಳಸಬೇಡಿ." },
      { en: "Do not pop blisters.", kn: "ಗುಳ್ಳೆಗಳನ್ನು ಒಡೆಯಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.FRACTURE,
    title: { en: "Fracture", kn: "ಮೂಳೆ ಮುರಿತ" },
    icon: "Bone",
    steps: [
      { en: "Stop any bleeding by applying pressure.", kn: "ಒತ್ತಡವನ್ನು ಹಾಕುವ ಮೂಲಕ ರಕ್ತಸ್ರಾವವನ್ನು ನಿಲ್ಲಿಸಿ." },
      { en: "Immobilize the injured area using a splint.", kn: "ಸ್ಪ್ಲಿಂಟ್ ಬಳಸಿ ಗಾಯಗೊಂಡ ಭಾಗವನ್ನು ಅದರ ಜಾಗದಲ್ಲೇ ನಿಲ್ಲುವಂತೆ ಮಾಡಿ." },
      { en: "Apply ice packs to reduce swelling.", kn: "ಊತವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಐಸ್ ಪ್ಯಾಕ್‌ಗಳನ್ನು ಅನ್ವಯಿಸಿ." }
    ],
    dos: [
      { en: "Keep the person still.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಸ್ತಬ್ಧವಾಗಿರಿಸಿ." },
      { en: "Wait for professional medical help.", kn: "ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಹಾಯಕ್ಕಾಗಿ ಕಾಯಿರಿ." }
    ],
    donts: [
      { en: "Do not try to realign the bone.", kn: "ಮೂಳೆಯನ್ನು ಸರಿಹೊಂದಿಸಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ." },
      { en: "Do not move the person unless necessary.", kn: "ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ ವ್ಯಕ್ತಿಯನ್ನು ಚಲಿಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.BLEEDING,
    title: { en: "Severe Bleeding", kn: "ತೀವ್ರ ರಕ್ತಸ್ರಾವ" },
    icon: "Droplets",
    steps: [
      { en: "Apply direct pressure to the wound with a clean cloth.", kn: "ಸ್ವಚ್ಛವಾದ ಬಟ್ಟೆಯಿಂದ ಗಾಯದ ಮೇಲೆ ನೇರ ಒತ್ತಡ ಹಾಕಿ." },
      { en: "Keep applying pressure until bleeding stops.", kn: "ರಕ್ತಸ್ರಾವ ನಿಲ್ಲುವವರೆಗೆ ಒತ್ತಡ ಹಾಕುತ್ತಲೇ ಇರಿ." },
      { en: "Elevate the injured part above heart level.", kn: "ಗಾಯಗೊಂಡ ಭಾಗವನ್ನು ಹೃದಯದ ಮಟ್ಟಕ್ಕಿಂತ ಮೇಲೆ ಎತ್ತರಿಸಿ." }
    ],
    dos: [
      { en: "Add more cloth if blood soaks through; do not remove old one.", kn: "ರಕ್ತವು ಬಟ್ಟೆಯ ಮೂಲಕ ಸೋರುತ್ತಿದ್ದರೆ ಹೆಚ್ಚಿನ ಬಟ್ಟೆಯನ್ನು ಸೇರಿಸಿ; ಹಳೆಯದನ್ನು ತೆಗೆಯಬೇಡಿ." },
      { en: "Call emergency if bleeding is uncontrollable.", kn: "ರಕ್ತಸ್ರಾವ ನಿಯಂತ್ರಿಸಲಾಗದಿದ್ದರೆ ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ." }
    ],
    donts: [
      { en: "Do not remove the original bandage.", kn: "ಮೂಲ ಬ್ಯಾಂಡೇಜ್ ಅನ್ನು ತೆಗೆದುಹಾಕಬೇಡಿ." },
      { en: "Do not use a tourniquet unless trained.", kn: "ತರಬೇತಿ ಪಡೆಯದ ಹೊರತು ಟೂರ್ನಿಕೆಟ್ ಬಳಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.ELECTRIC_SHOCK,
    title: { en: "Electric Shock", kn: "ವಿದ್ಯುತ್ ಆಘಾತ" },
    icon: "Zap",
    steps: [
      { en: "Do not touch the person if they are still in contact with the source.", kn: "ವ್ಯಕ್ತಿಯು ಇನ್ನೂ ವಿದ್ಯುತ್ ಮೂಲದ ಸಂಪರ್ಕದಲ್ಲಿದ್ದರೆ ಅವರನ್ನು ಮುಟ್ಟಬೇಡಿ." },
      { en: "Turn off the source of electricity if possible.", kn: "ಸಾಧ್ಯವಾದರೆ ವಿದ್ಯುತ್ ಮೂಲವನ್ನು ಆಫ್ ಮಾಡಿ." },
      { en: "Use a non-conducting object (wood/plastic) to move the source away.", kn: "ಮೂಲವನ್ನು ದೂರ ಸರಿಸಲು ಅಲೋಹದ ವಸ್ತುವನ್ನು (ಮರ/ಪ್ಲಾಸ್ಟಿಕ್) ಬಳಸಿ." },
      { en: "Check for breathing and pulse; start CPR if needed.", kn: "ಉಸಿರಾಟ ಮತ್ತು ನಾಡಿಮಿಡಿತವನ್ನು ಪರೀಕ್ಷಿಸಿ; ಅಗತ್ಯವಿದ್ದರೆ ಸಿಪಿಆರ್ ಪ್ರಾರಂಭಿಸಿ." }
    ],
    dos: [
      { en: "Call for emergency help immediately.", kn: "ತಕ್ಷಣ ತುರ್ತು ಸಹಾಯಕ್ಕಾಗಿ ಕರೆ ಮಾಡಿ." },
      { en: "Cover any burned area with a sterile gauze bandage.", kn: "ಸುಟ್ಟ ಯಾವುದೇ ಜಾಗವನ್ನು ಸ್ಟೆರೈಲ್ ಬ್ಯಾಂಡೇಜ್‌ನಿಂದ ಮುಚ್ಚಿ." }
    ],
    donts: [
      { en: "Do not get near high-voltage wires until power is off.", kn: "ವಿದ್ಯುತ್ ಆಫ್ ಆಗುವವರೆಗೆ ಹೈ-ವೋಲ್ಟೇಜ್ ವೈರ್‌ಗಳ ಹತ್ತಿರ ಹೋಗಬೇಡಿ." },
      { en: "Do not move the person unless in immediate danger.", kn: "ತಕ್ಷಣದ ಅಪಾಯವಿಲ್ಲದಿದ್ದರೆ ವ್ಯಕ್ತಿಯನ್ನು ಚಲಿಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.HEAT_STROKE,
    title: { en: "Heat Stroke", kn: "ಬಿಸಿಲಿನ ಹೊಡೆತ" },
    icon: "Sun",
    steps: [
      { en: "Move the person to a cool, shaded area.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ತಂಪಾದ, ನೆರಳಿನ ಜಾಗಕ್ಕೆ ಸರಿಸಿ." },
      { en: "Cool the person by spraying with cool water or using wet cloths.", kn: "ತಣ್ಣನೆಯ ನೀರನ್ನು ಸಿಂಪಡಿಸುವ ಮೂಲಕ ಅಥವಾ ಒದ್ದೆಯಾದ ಬಟ್ಟೆಯನ್ನು ಬಳಸಿ ವ್ಯಕ್ತಿಯನ್ನು ತಂಪಾಗಿಸಿ." },
      { en: "Fan them vigorously.", kn: "ಅವರಿಗೆ ಬಲವಾಗಿ ಗಾಳಿ ಹಾಕಿ." }
    ],
    dos: [
      { en: "Call 108 immediately as this is a medical emergency.", kn: "ಇದು ವೈದ್ಯಕೀಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಾದ್ದರಿಂದ ಕೂಡಲೇ 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ." },
      { en: "Apply ice packs to armpits, groin, and neck.", kn: "ಕಂಕುಳಲ್ಲಿ, ತೊಡೆಸಂದು ಮತ್ತು ಕುತ್ತಿಗೆಗೆ ಐಸ್ ಪ್ಯಾಕ್‌ಗಳನ್ನು ಅನ್ವಯಿಸಿ." }
    ],
    donts: [
      { en: "Do not give them drinks containing alcohol or caffeine.", kn: "ಆಲ್ಕೋಹಾಲ್ ಅಥವಾ ಕೆಫೀನ್ ಹೊಂದಿರುವ ಪಾನೀಯಗಳನ್ನು ನೀಡಬೇಡಿ." },
      { en: "Do not use an ice bath for older people or children.", kn: "ಹಿರಿಯರು ಅಥವಾ ಮಕ್ಕಳಿಗೆ ಐಸ್ ಸ್ನಾನವನ್ನು ಬಳಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.DROWNING,
    title: { en: "Drowning", kn: "ನೀರಿನಲ್ಲಿ ಮುಳುಗುವುದು" },
    icon: "Waves",
    steps: [
      { en: "Get the person out of the water safely.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನೀರಿನಿಂದ ಹೊರಗೆ ತನ್ನಿ." },
      { en: "Check for breathing. If not breathing, start CPR.", kn: "ಉಸಿರಾಟವನ್ನು ಪರೀಕ್ಷಿಸಿ. ಉಸಿರಾಟವಿಲ್ಲದಿದ್ದರೆ, ಸಿಪಿಆರ್ ಪ್ರಾರಂಭಿಸಿ." },
      { en: "Give 2 rescue breaths initially, then chest compressions.", kn: "ಆರಂಭದಲ್ಲಿ 2 ಬಾರಿ ಕೃತಕ ಉಸಿರಾಟವನ್ನು ನೀಡಿ, ನಂತರ ಎದೆಯ ಸಂಕೋಚನಗಳನ್ನು ಮಾಡಿ." }
    ],
    dos: [
      { en: "Keep the person warm.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಬೆಚ್ಚಗಿರಿಸಿ." },
      { en: "Call emergency services even if they seem fine.", kn: "ಅವರು ಚೆನ್ನಾಗಿದ್ದಾರೆಂದು ಕಂಡರೂ ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ." }
    ],
    donts: [
      { en: "Do not delay CPR to try to clear water from lungs.", kn: "ಶ್ವಾಸಕೋಶದಿಂದ ನೀರನ್ನು ಹೊರಹಾಕಲು ಪ್ರಯತ್ನಿಸುವಾಗ ಸಿಪಿಆರ್ ಅನ್ನು ವಿಳಂಬ ಮಾಡಬೇಡಿ." },
      { en: "Do not put yourself in danger while rescuing.", kn: "ರಕ್ಷಿಸುವಾಗ ನಿಮ್ಮನ್ನು ಅಪಾಯಕ್ಕೆ ಸಿಲುಕಿಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.SEIZURES,
    title: { en: "Seizures", kn: "ಮೂರ್ಛೆ ರೋಗ (ಸೆಳೆತ)" },
    icon: "Activity",
    steps: [
      { en: "Keep the person safe from nearby sharp objects.", kn: "ಹತ್ತಿರದ ಚೂಪಾದ ವಸ್ತುಗಳಿಂದ ವ್ಯಕ್ತಿಯನ್ನು ರಕ್ಷಿಸಿ." },
      { en: "Place something soft under their head.", kn: "ಅವರ ತಲೆಯ ಕೆಳಗೆ ಯಾವುದಾದರೂ ಮೃದುವಾದ ವಸ್ತುವನ್ನು ಇರಿಸಿ." },
      { en: "Roll them onto their side after the seizure stops.", kn: "ಸೆಳೆತ ನಿಂತ ನಂತರ ಅವರನ್ನು ಒಂದು ಪಾರ್ಶ್ವಕ್ಕೆ ತಿರುಗಿಸಿ ಮಲಗಿಸಿ." }
    ],
    dos: [
      { en: "Time the duration of the seizure.", kn: "ಸೆಳೆತದ ಅವಧಿಯನ್ನು ಗಮನಿಸಿ." },
      { en: "Stay until they are fully awake and coherent.", kn: "ಅವರು ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರಜ್ಞೆ ಬರುವವರೆಗೆ ಅವರ ಜೊತೆ ಇರಿ." }
    ],
    donts: [
      { en: "Do not put anything in their mouth.", kn: "ಅವರ ಬಾಯಿಯಲ್ಲಿ ಯಾವುದನ್ನಾದರೂ ಇರಿಸಬೇಡಿ." },
      { en: "Do not restrain their movements.", kn: "ಅವರ ಚಲನವಲನಗಳನ್ನು ಹತ್ತಿಕ್ಕಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.POISONING,
    title: { en: "Poisoning", kn: "ವಿಷಪ್ರಾಶನ" },
    icon: "Skull",
    steps: [
      { en: "Identify what the person swallowed or inhaled.", kn: "ವ್ಯಕ್ತಿಯು ಏನನ್ನು ಸೇವಿಸಿದ್ದಾರೆ ಅಥವಾ ಉಸಿರಾಡಿದ್ದಾರೆ ಎಂಬುದನ್ನು ಗುರುತಿಸಿ." },
      { en: "Keep the poison container/label for the doctor.", kn: "ವಿಷದ ಕಂಟೇನರ್/ಲೇಬಲ್ ಅನ್ನು ವೈದ್ಯರಿಗಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಿ." },
      { en: "Call the poison control center or emergency help.", kn: "ವಿಷ ನಿಯಂತ್ರಣ ಕೇಂದ್ರ ಅಥವಾ ತುರ್ತು ಸಹಾಯಕ್ಕೆ ಕರೆ ಮಾಡಿ." }
    ],
    dos: [
      { en: "If on skin, wash with plenty of water for 15 mins.", kn: "ಚರ್ಮದ ಮೇಲಿದ್ದರೆ, 15 ನಿಮಿಷಗಳ ಕಾಲ ಸಾಕಷ್ಟು ನೀರಿನಿಂದ ತೊಳೆಯಿರಿ." },
      { en: "If inhaled, get the person to fresh air.", kn: "ಉಸಿರಾಟದ ಮೂಲಕ ಹೋಗಿದ್ದರೆ, ವ್ಯಕ್ತಿಯನ್ನು ತಾಜಾ ಗಾಳಿ ಇರುವ ಕಡೆ ಕರೆದೊಯ್ಯಿರಿ." }
    ],
    donts: [
      { en: "Do not induce vomiting unless told by a professional.", kn: "ವೃತ್ತಿಪರರು ಹೇಳದ ಹೊರತು ವಾಂತಿ ಮಾಡಿಸಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ." },
      { en: "Do not give Ipecac syrup.", kn: "ಇಪೆಕಾಕ್ ಸಿರಪ್ ನೀಡಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.STROKE,
    title: { en: "Stroke (FAST)", kn: "ಪಾರ್ಶ್ವವಾಯು" },
    icon: "Brain",
    steps: [
      { en: "Face: Ask them to smile. Does one side droop?", kn: "ಮುಖ: ನಗಲು ಹೇಳಿ. ಒಂದು ಪಾರ್ಶ್ವ ಜೋಲಾಡುತ್ತಿದೆಯೇ?" },
      { en: "Arms: Raise both arms. Does one drift downward?", kn: "ತೋಳುಗಳು: ಎರಡೂ ತೋಳುಗಳನ್ನು ಎತ್ತಲು ಹೇಳಿ. ಒಂದು ಕೆಳಕ್ಕೆ ಜಾರುತ್ತಿದೆಯೇ?" },
      { en: "Speech: Repeat a simple phrase. Is it slurred?", kn: "ಮಾತು: ಒಂದು ಸರಳ ವಾಕ್ಯವನ್ನು ಹೇಳಲು ತಿಳಿಸಿ. ಮಾತು ತೊದಲುತ್ತಿದೆಯೇ?" },
      { en: "Time: If any of these are seen, call 108 immediately.", kn: "ಸಮಯ: ಇವುಗಳಲ್ಲಿ ಯಾವುದಾದರೂ ಕಂಡುಬಂದಲ್ಲಿ ಕೂಡಲೇ 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ." }
    ],
    dos: [
      { en: "Note the time when symptoms first started.", kn: "ಲಕ್ಷಣಗಳು ಮೊದಲು ಕಾಣಿಸಿಕೊಂಡ ಸಮಯವನ್ನು ಗಮನಿಸಿ." },
      { en: "Keep the person calm and lying on their side.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಶಾಂತವಾಗಿರಿಸಿ ಮತ್ತು ಪಕ್ಕಕ್ಕೆ ಮಲಗಿಸಿ." }
    ],
    donts: [
      { en: "Do not give the person aspirin or any food/drink.", kn: "ವ್ಯಕ್ತಿಗೆ ಆಸ್ಪಿರಿನ್ ಅಥವಾ ಯಾವುದೇ ಆಹಾರ/ಪಾನೀಯ ನೀಡಬೇಡಿ." },
      { en: "Do not wait to see if symptoms improve.", kn: "ಲಕ್ಷಣಗಳು ಸುಧಾರಿಸುತ್ತವೆಯೇ ಎಂದು ನೋಡಲು ಕಾಯಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.ASTHMA_ATTACK,
    title: { en: "Asthma Attack", kn: "ಆಸ್ತಮಾ ದಾಳಿ" },
    icon: "CloudRain",
    steps: [
      { en: "Help the person sit upright and stay calm.", kn: "ವ್ಯಕ್ತಿಯು ನೇರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಲು ಮತ್ತು ಶಾಂತವಾಗಿರಲು ಸಹಾಯ ಮಾಡಿ." },
      { en: "Ask for their inhaler and help them use it.", kn: "ಅವರ ಇನ್ಹೇಲರ್ ಕೇಳಿ ಮತ್ತು ಅದನ್ನು ಬಳಸಲು ಸಹಾಯ ಮಾಡಿ." },
      { en: "Give one puff every 30-60 seconds, up to 10 puffs.", kn: "ಪ್ರತಿ 30-60 ಸೆಕೆಂಡಿಗೆ ಒಂದು ಪಫ್ ನೀಡಿ, ಒಟ್ಟು 10 ಪಫ್‌ಗಳವರೆಗೆ." }
    ],
    dos: [
      { en: "Call emergency if the inhaler doesn't help.", kn: "ಇನ್ಹೇಲರ್ ಸಹಾಯ ಮಾಡದಿದ್ದರೆ ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ." },
      { en: "Loosen any tight clothing around the neck.", kn: "ಕುತ್ತಿಗೆಯ ಸುತ್ತಲಿನ ಬಿಗಿಯಾದ ಬಟ್ಟೆಗಳನ್ನು ಸಡಿಲಗೊಳಿಸಿ." }
    ],
    donts: [
      { en: "Do not leave them alone.", kn: "ಅವರನ್ನು ಒಬ್ಬರೇ ಬಿಡಬೇಡಿ." },
      { en: "Do not ask them to walk or lie down.", kn: "ಅವರನ್ನು ನಡೆಯಲು ಅಥವಾ ಮಲಗಲು ಕೇಳಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.HEAD_INJURY,
    title: { en: "Head Injury", kn: "ತಲೆಗೆ ಪೆಟ್ಟು" },
    icon: "Activity",
    steps: [
      { en: "Check for consciousness and breathing.", kn: "ಪ್ರಜ್ಞೆ ಮತ್ತು ಉಸಿರಾಟವನ್ನು ಪರೀಕ್ಷಿಸಿ." },
      { en: "Apply a cold pack to any swelling.", kn: "ಊತವಿರುವಲ್ಲಿ ಕೋಲ್ಡ್ ಪ್ಯಾಕ್ ಅನ್ವಯಿಸಿ." },
      { en: "Watch closely for confusion, vomiting, or heavy bleeding.", kn: "ಗೊಂದಲ, ವಾಂತಿ ಅಥವಾ ಭಾರಿ ರಕ್ತಸ್ರಾವವಾಗುತ್ತಿದೆಯೇ ಎಂದು ಸೂಕ್ಷ್ಮವಾಗಿ ಗಮನಿಸಿ." }
    ],
    dos: [
      { en: "Keep the person still and calm.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಸ್ತಬ್ಧವಾಗಿ ಮತ್ತು ಶಾಂತವಾಗಿರಿಸಿ." },
      { en: "Call 108 if they lose consciousness/vomit.", kn: "ಅವರು ಪ್ರಜ್ಞೆ ತಪ್ಪಿದರೆ ಅಥವಾ ವಾಂತಿ ಮಾಡಿದರೆ 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ." }
    ],
    donts: [
      { en: "Do not remove any objects stuck in the wound.", kn: "ಗಾಯದಲ್ಲಿ ಸಿಲುಕಿರುವ ಯಾವುದೇ ವಸ್ತುಗಳನ್ನು ತೆಗೆದುಹಾಕಬೇಡಿ." },
      { en: "Do not wash a deep or bleeding head wound.", kn: "ಆಳವಾದ ಅಥವಾ ರಕ್ತಸ್ರಾವವಾಗುತ್ತಿರುವ ತಲೆಯ ಗಾಯವನ್ನು ತೊಳೆಯಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.DIABETIC_EMERGENCY,
    title: { en: "Diabetes (Low Sugar)", kn: "ಮಧುಮೇಹ (ಕಡಿಮೆ ಸಕ್ಕರೆ)" },
    icon: "Activity",
    steps: [
      { en: "If conscious, give 15g of fast-acting sugar (juice/candy).", kn: "ಪ್ರಜ್ಞೆಯಲ್ಲಿದ್ದರೆ, 15 ಗ್ರಾಂ ವೇಗವಾಗಿ ಕೆಲಸ ಮಾಡುವ ಸಕ್ಕರೆ (ಜ್ಯೂಸ್/ಕ್ಯಾಂಡಿ) ನೀಡಿ." },
      { en: "Wait 15 mins then check if they feel better.", kn: "15 ನಿಮಿಷ ಕಾಯಿರಿ, ನಂತರ ಅವರಿಗೆ ಸುಧಾರಣೆ ಅನಿಸುತ್ತಿದೆಯೇ ಎಂದು ನೋಡಿ." },
      { en: "Repeat sugar if symptoms persist.", kn: "ಲಕ್ಷಣಗಳು ಮುಂದುವರಿದರೆ ಮತ್ತೆ ಸಕ್ಕರೆ ನೀಡಿ." }
    ],
    dos: [
      { en: "Call emergency if they become unconscious.", kn: "ಅವರು ಪ್ರಜ್ಞೆ ತಪ್ಪಿದರೆ ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ." },
      { en: "Follow up with a protein-rich meal once stable.", kn: "ಸ್ಥಿರವಾದ ನಂತರ ಪ್ರೋಟೀನ್ ಭರಿತ ಊಟವನ್ನು ನೀಡಿ." }
    ],
    donts: [
      { en: "Do not give sugar to an unconscious person.", kn: "ಪ್ರಜ್ಞೆ ತಪ್ಪಿದ ವ್ಯಕ್ತಿಗೆ ಸಕ್ಕರೆ ನೀಡಬೇಡಿ." },
      { en: "Do not give insulin during a suspected low sugar event.", kn: "ಕಡಿಮೆ ಸಕ್ಕರೆ ಎಂದು ಶಂಕಿಸಿದಾಗ ಇನ್ಸುಲಿನ್ ನೀಡಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.EYE_INJURY,
    title: { en: "Eye Injury", kn: "ಕಣ್ಣಿನ ಗಾಯ" },
    icon: "Eye",
    steps: [
      { en: "If a chemical is involved, flush with clean water for 15 min.", kn: "ರಸಾಯನಿಕ ಸಿಡಿದಿದ್ದರೆ, 15 ನಿಮಿಷಗಳ ಕಾಲ ಸ್ವಚ್ಛ ನೀರಿನಿಂದ ತೊಳೆಯಿರಿ." },
      { en: "For a small object, blink to see if it clears.", kn: "ಸಣ್ಣ ವಸ್ತುವಾಗಿದ್ದರೆ, ಕಣ್ಣು ಮಿಟುಕಿಸಿ ಅದು ಹೊರಬರುತ್ತದೆಯೇ ಎಂದು ನೋಡಿ." },
      { en: "Cover injuries with a loose clean shield.", kn: "ಗಾಯಗಳನ್ನು ಸಡಿಲವಾದ ಸ್ವಚ್ಛ ಶೀಲ್ಡ್‌ನಿಂದ ಮುಚ್ಚಿ." }
    ],
    dos: [
      { en: "Seek immediate medical attention for any vision loss.", kn: "ದೃಷ್ಟಿ ಮಂದವಾದರೆ ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಗಮನ ಹರಿಸಿ." },
      { en: "Identify the chemical if possible.", kn: "ಸಾಧ್ಯವಾದರೆ ರಸಾಯನಿಕ ಯಾವುದು ಎಂದು ಗುರುತಿಸಿ." }
    ],
    donts: [
      { en: "Do not rub the eye.", kn: "ಕಣ್ಣನ್ನು ಉಜ್ಜಬೇಡಿ." },
      { en: "Do not try to remove an embedded object.", kn: "ಸಿಕ್ಕಿಹಾಕಿಕೊಂಡ ವಸ್ತುವನ್ನು ತೆಗೆಯಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.ALLERGIC_REACTION,
    title: { en: "Allergic Reaction", kn: "ಅಲರ್ಜಿ ಪ್ರತಿಕ್ರಿಯೆ" },
    icon: "Stethoscope",
    steps: [
      { en: "Identify and remove the allergen if possible.", kn: "ಸಾಧ್ಯವಾದರೆ ಅಲರ್ಜಿಕಾರಕವನ್ನು ಗುರುತಿಸಿ ಮತ್ತು ತೆಗೆದುಹಾಕಿ." },
      { en: "Ask if they have an EpiPen and help them use it.", kn: "ಅವರಲ್ಲಿ ಎಪಿಪನ್ (EpiPen) ಇದೆಯೇ ಎಂದು ಕೇಳಿ ಮತ್ತು ಬಳಸಲು ಸಹಾಯ ಮಾಡಿ." },
      { en: "Keep the person calm and monitor breathing.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಶಾಂತವಾಗಿರಿಸಿ ಮತ್ತು ಉಸಿರಾಟವನ್ನು ಗಮನಿಸಿ." }
    ],
    dos: [
      { en: "Call 108 if there is swelling of the tongue/throat.", kn: "ನಾಲಿಗೆ ಅಥವಾ ಗಂಟಲು ಊದಿಕೊಂಡಿದ್ದರೆ 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ." },
      { en: "Note down the substance that caused the reaction.", kn: "ಪ್ರತಿಕ್ರಿಯೆಗೆ ಕಾರಣವಾದ ವಸ್ತುವನ್ನು ಗುರುತು ಮಾಡಿಕೊಳ್ಳಿ." }
    ],
    donts: [
      { en: "Do not wait to see if symptoms go away.", kn: "ಲಕ್ಷಣಗಳು ತಾವಾಗಿಯೇ ಹೋಗುತ್ತವೆಯೇ ಎಂದು ನೋಡಲು ಕಾಯಬೇಡಿ." },
      { en: "Do not give any oral medication if they struggle to swallow.", kn: "ನುಂಗಲು ಕಷ್ಟಪಡುತ್ತಿದ್ದರೆ ಯಾವುದೇ ಮೌಖಿಕ ಔಷಧ ನೀಡಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.FAINTING,
    title: { en: "Fainting", kn: "ಪ್ರಜ್ಞೆ ತಪ್ಪುವುದು (ಮೂರ್ಛೆ)" },
    icon: "Thermometer",
    steps: [
      { en: "Lay the person flat on their back.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಬೆನ್ನಿನ ಮೇಲೆ ಲಂಬವಾಗಿ ಮಲಗಿಸಿ." },
      { en: "Elevate their feet about 12 inches.", kn: "ಅವರ ಪಾದಗಳನ್ನು ಸುಮಾರು 12 ಇಂಚುಗಳಷ್ಟು ಎತ್ತರಿಸಿ." },
      { en: "Loosen belts, collars, or other tight clothing.", kn: "ಬೆಲ್ಟ್, ಕಾಲರ್ ಅಥವಾ ಇತರ ಬಿಗಿಯಾದ ಬಟ್ಟೆಗಳನ್ನು ಸಡಿಲಗೊಳಿಸಿ." }
    ],
    dos: [
      { en: "Check if they are breathing.", kn: "ಉಸಿರಾಡುತ್ತಿದ್ದಾರೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಿ." },
      { en: "Call 108 if they don't regain consciousness within 1 min.", kn: "1 ನಿಮಿಷದೊಳಗೆ ಪ್ರಜ್ಞೆ ಬಾರದಿದ್ದರೆ 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ." }
    ],
    donts: [
      { en: "Do not give them anything to drink until fully awake.", kn: "ಸಂಪೂರ್ಣ ಪ್ರಜ್ಞೆ ಬರುವವರೆಗೆ ಅವರಿಗೆ ಕುಡಿಯಲು ಏನನ್ನೂ ನೀಡಬೇಡಿ." },
      { en: "Do not splash water on their face.", kn: "ಅವರ ಮುಖದ ಮೇಲೆ ನೀರನ್ನು ಚಿಮುಕಿಸಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.SPINAL_INJURY,
    title: { en: "Spinal Injury", kn: "ಬೆನ್ನುಮೂಳೆಯ ಗಾಯ" },
    icon: "AlertTriangle",
    steps: [
      { en: "Do not move the person. Keep their head and neck still.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಚಲಿಸಬೇಡಿ. ಅವರ ತಲೆ ಮತ್ತು ಕುತ್ತಿಗೆಯನ್ನು ಸ್ತಬ್ಧವಾಗಿರಿಸಿ." },
      { en: "Place heavy towels on both sides of the neck.", kn: "ಕುತ್ತಿಗೆಯ ಎರಡೂ ಬದಿಯಲ್ಲಿ ದಪ್ಪ ಟವೆಲ್‌ಗಳನ್ನು ಇರಿಸಿ." },
      { en: "Keep the person calm and warm.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಶಾಂತವಾಗಿ ಮತ್ತು ಬೆಚ್ಚಗಿರಿಸಿ." }
    ],
    dos: [
      { en: "Call 108 immediately.", kn: "ತಕ್ಷಣ 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ." },
      { en: "Provide first aid for other life-threatening injuries without moving them.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಚಲಿಸದೆಯೇ ಇತರ ಗಂಭೀರ ಗಾಯಗಳಿಗೆ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ನೀಡಿ." }
    ],
    donts: [
      { en: "Do not remove a helmet if a crash occurred.", kn: "ಅಪಘಾತ ಸಂಭವಿಸಿದ್ದರೆ ಹೆಲ್ಮೆಟ್ ತೆಗೆಯಬೇಡಿ." },
      { en: "Do not transport the person in a car.", kn: "ವ್ಯಕ್ತಿಯನ್ನು ಕಾರಿನಲ್ಲಿ ಕರೆದೊಯ್ಯಬೇಡಿ." }
    ]
  },
  {
    id: EmergencyType.SPRAINS,
    title: { en: "Sprains (RICE)", kn: "ಉಳುಕುಗಳು (RICE ವಿಧಾನ)" },
    icon: "Stethoscope",
    steps: [
      { en: "Rest: Avoid using the injured part.", kn: "ವಿಶ್ರಾಂತಿ (Rest): ಗಾಯಗೊಂಡ ಭಾಗವನ್ನು ಬಳಸಬೇಡಿ." },
      { en: "Ice: Apply ice packs for 15-20 min every hour.", kn: "ಐಸ್ (Ice): ಪ್ರತಿ ಗಂಟೆಗೆ 15-20 ನಿಮಿಷಗಳ ಕಾಲ ಐಸ್ ಪ್ಯಾಕ್ ಹಚ್ಚಿ." },
      { en: "Compression: Wrap with an elastic bandage.", kn: "ಸಂಕೋಚನ (Compression): ಎಲಾಸ್ಟಿಕ್ ಬ್ಯಾಂಡೇಜ್‌ನಿಂದ ಸುತ್ತಿ." },
      { en: "Elevation: Keep the injured part above the heart.", kn: "ಎತ್ತರ (Elevation): ಗಾಯಗೊಂಡ ಭಾಗವನ್ನು ಹೃದಯದ ಮಟ್ಟಕ್ಕಿಂತ ಮೇಲೆ ಇರಿಸಿ." }
    ],
    dos: [
      { en: "Use a splint if moving is necessary.", kn: "ಚಲಿಸುವುದು ಅನಿವಾರ್ಯವಾದರೆ ಸ್ಪ್ಲಿಂಟ್ ಬಳಸಿ." },
      { en: "Check for any numbness or blue skin.", kn: "ಯಾವುದಾದರೂ ಮರಗಟ್ಟುವಿಕೆ ಅಥವಾ ಚರ್ಮ ನೀಲಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿದೆಯೇ ಎಂದು ನೋಡಿ." }
    ],
    donts: [
      { en: "Do not apply direct heat to the area for 48 hours.", kn: "48 ಗಂಟೆಗಳ ಕಾಲ ಆ ಜಾಗಕ್ಕೆ ನೇರ ಉಷ್ಣತೆಯನ್ನು ನೀಡಬೇಡಿ." },
      { en: "Do not try to 'walk it off'.", kn: "ನಡೆದು ಅದು ಸರಿಯಾಗುತ್ತದೆ ಎಂದು ಭಾವಿಸಬೇಡಿ." }
    ]
  }
];

export const hospitals = [
  { id: 1, name: "City Emergency Center", distance: "0.8 km", phone: "102" },
  { id: 2, name: "St. Mary's Trauma Care", distance: "2.4 km", phone: "108" },
  { id: 3, name: "Government General Hospital", distance: "4.1 km", phone: "112" }
];

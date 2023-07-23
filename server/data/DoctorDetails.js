const doctors = [
    {
      _id: "1",
      image: '/Doctorsimg/doctor1.jpg',
      name: "Dr. Vaishali Chavan",
      specialization: "General and Laprosonic Surgeon",
      description: "Dr. Vaishali R Chavan is a Gynecologist in Wanowrie, Pune and has an experience of 30 years in this field. Dr. Vaishali R Chavan practices at Saanvi Gynaecology And Maternity Center in Wanowrie, Pune and Sahyadri Super Speciality Hospital Hadapsar in Hadapsar, Pune. She completed MBBS from University of Mumbai, Mumbai in 1992,MD - Obstetrics & Gynaecology from University of Mumbai, Mumbai in 1997 and Fellow of Indian College of Obstetrics and Gynecology (FICOG) from INDIAN COLLEGE OF OBSTRETICIAN & GYNAECOLOGY in 2016. She is a member of Indian Medical Association (IMA),INDIAN ASSOCIATION OF GYNAEC ENDOSCOPIC ISAR,FEDERATION OF OBSTETRICS & GYNAECOLOGY SOCIETY OF INDIA,CHAIRPERSON PERINATOLOGY COMMITTEE FOGSI and Maharastra Medical Council. Some of the services provided by the doctor are: Laparoscopic Sterilization,Doppler Scan In Pregnancy,Laparoscopic Myomectomy,Maternal Fetal Medicine and menopause advice etc",
      rating: 4.5,
      numReviews: 12,
      experience: "30+ years",
      slogan: "Enjoy Your Life — We'll Be Here to Save it!",
      timings: {
        time1: "10:00 AM",
        time2: "11:00 AM",
        time3: "12:00 PM",
        time4: "13:00 PM"
      }
    },
    {
      _id: "2",
      image: "/Doctorsimg/doctor2.jpg",
      name: "Dr. Gaurav Kharya",
      specialization: "Pediatrician",
      description: "Dr. Gaurav Kharya is a Senior Consultant & Head Pediatric Hemato-oncology Immunology & Bone Marrow Transplant at Artemis Hospitals, Gurgaon (Delhi-NCR). He completed his graduation from Netaji Subash Chandra Bose Medical College, Jabalpur Madhya Pradesh. Following this he did his post-graduation DCH in Pediatric from Baba Raghav Das Medical College, Gorakhpur, UP. In year 2005 he joined his DNB in pediatric at Sir Ganga Ram Hospital, Delhi and completed his training in 2007. After completing his DNB pediatrics he started working as a registrar in pediatrics at Chacha Nehru Bal Chikitsalya, Delhi. In 2009 he joined his fellowship in Pediatric hemato-oncology & BMT at Sir Ganga Ram Hospital which he completed in 2011. Soon after this he started working as a consultant in Pediatric Hematology Oncology, Immunology & BMT at Dr B L Kapur Memorial hospital where he was instrumental in starting pediatric hemato-oncology services and played a key role in taking the BMT programme to the next step. In September 2012 he moved to The Great north Children’s hospital, Newcastle upon tyne, United Kingdom to work as a fellow in pediatric hemato-oncology, immunology & bone marrow transplant. There he worked with the leading names in the field of pediatric hemato-oncology, immunology & bone marrow transplant. After working there for a year he moved to St Mary’s hospital, Imperial College NHS trust, London, United Kingdom to work more in the field of pediatric hematology and BMT.",
      rating: 3.6,
      numReviews: 12,
      experience: "19+ years",
      slogan: "We care for you — inside and out!",
      timings: {
        time1: "10:00 AM",
        time2: "11:00 AM",
        time3: "12:00 AM",
        time4: "13:00 AM"
      }

    },
    {
      _id: "3",
      image: '/Doctorsimg/doctor3.jpg',
      name: "Dr. Ashish Saharwal",
      specialization: "Urologist",
      description: "Dr Ashish Sabharwal is a Senior Consultant in Urology / Andrology and Robotic Surgery. He is Board Certified in Urology. After his urology residency in Apollo Hospital, he went to USA to do a highly coveted Endourology and Robotic Prostate Surgery fellowship in Jackson Health System, Miami, Florida, USA from 2008 to 2011. At Apollo Hospital and Blue Ribbon Prostate Clinic, he is doing all the major complex surgeries that he was doing in USA. His special expertise is in Robotic Surgery to treat Prostate Cancer, Laser surgery for Enlarged Prostate, laser surgery for Kidney stone, treatment of erectile dysfunction including Penile Implants. Dr. Ashish is Prostate Cancer Treatment and Robotic Surgery Expert. He has Performed over 2,000 + successful robotic prostate surgeries and as such, many regard him as the Best Prostate Surgeon and most experienced Robotic Surgeon in India.",
      rating: 5,
      numReviews: 12,
      experience: "18+ years",
      slogan: "It's Not Great Coming To Us, But It Sure Feels Great When Leaving!"

    },
    {
      _id: "4",
      image: '/Doctorsimg/doctor4.jpeg',
      name: "Dr. Sanjay Sachdeva",
      specialization: "Otorhinolaryngologist",
      description: "Dr. Sanjay Sachdeva is a ENT/ Otorhinolaryngologist in Saket, Delhi and has an experience of 36 years in this field. Dr. Sanjay Sachdeva practices at Max Smart Superspeciality Hospital in Saket, Delhi and Max Multi Speciality Centre - Panchsheel Park in Panchsheel Park, Delhi. He completed MBBS from University of Delhi in 1981 and MS - ENT from University of Delhi in 1986. Some of the services provided by the doctor are: Stapedectomy,Nasopharyngeal Angiofibroma Treatment,Obstructive Sleep Apnea,Ear Drum Repair and Ear Wax (Cerumen) Removal etc.",
      rating: 5,
      numReviews: 12,
      experience: "36+ years",
      slogan: "Here, we treat and care for patients like our family!"

    },
    {
      _id: "5",
      image: '/Doctorsimg/doctor5.jpg',
      name: "Dr. Siddhartha Mukherjee",
      specialization: "Biologist",
      description: "Siddhartha Mukherjee is the author of The Emperor of All Maladies: A Biography of Cancer, winner of the 2011 Pulitzer Prize in general nonfiction, and The Laws of Medicine. He is the editor of Best Science Writing 2013. Siddhartha Mukherjee’s THE GENE: An Intimate History  is his latest work – the story of the quest to decipher the master-code of instructions that makes and defines humans, that governs our form, function, and fate and determines the future of our children. Mukherjee is an assistant professor of medicine at Columbia University and a cancer physician and researcher. A Rhodes scholar, he graduated from Stanford University, University of Oxford, and Harvard Medical School. He has published articles in Nature, The New England Journal of Medicine, The New York Times, and Cell. He lives in New York with his wife and daughters.",
      rating: 4.5,
      numReviews: 12,
      experience: "20+ years",
      slogan: "Better Medicine Makes a Better World!"
    },
    {
      _id: "6",
      image: '/Doctorsimg/doctor6.jpg',
      name: "Dr. Surbhi Anand",
      specialization: "Endodontist",
      description: "Dr. Surbhi Anand is a practicing Endodontist and Conservative Dentist with over 9 years of experience, after procuring the bachelor's degree, she pursued a maters course in Restorative dentistry & Endodontology, specializing in Single sitting Root Canal Treatment, cosmetic dentistry and smile makeovers. She has been associated as a senior consultant with healthcare setups including Fortis hospital Noida, Fortis C Doc Chirag Enclave, South Delhi, Columbia Asia Hospital and has a vast consultation base to various reputable dental practices in Delhi/NCR including Axiss Dental Pvt. Ltd. since 2013 till date, being academically inclined, she is also working as a Reader at ITS Dental College Greater Noida. Apart from being actively involved in various Continuing Dental Education Programme's, Dr. Surbhi Anand has more than half a dozen international and national research publications and was also conferred with the best scientific paper presentation award at an international conference held in Dubai. She is a firm believer in rendering quality dental care with compassion.",
      rating: 3,
      numReviews: 12,
      experience: "12+ years",
      slogan: "Laughter is the Best Medicine. Too Bad You Can’t Laugh When You Are Sick!"
    },
    {
      _id: "7",
      image: '/Doctorsimg/doctor7.jpg',
      name: "Dr. Mohamed Rela",
      specialization: "Liver Transplantation Surgeon",
      description: "Professor Mohamed Rela is one of the world’s best liver transplant surgeons. With over 28 years of experience in liver transplantation, he is considered one of the world’s best liver transplant surgeons. The Chairman & Director of Dr. Rela Institute & Medical Centre, Dr. Rela has successfully performed over 4500 liver transplants in his career of 3 decades making his way into the Guinness Book of Records for performing successful liver transplantation of a 5-day old baby. Born to Haji S A Shamsudin, a textile businessman in Singapore and Hasma Beevi, in Kiliyanur village in Tamil Nadu; Professor Rela completed his schooling from Besant Theosophical High School and subsequently went on to pursue MBBS and MS degree from the Stanley Medical College in Chennai. The year 1986, marked another success for Dr. Rela when he received his second MS from Edinburgh. His contributions to the medical field include auxiliary transplantation, split liver transplantation techniques (first of its kind in India) and live donor liver transplantation. He also has to his credit the Living Donor Liver Transplant program, under which he performed 1500 liver transplants in a short span of 8 years. Aside from liver transplants, Dr. Rela is a busy hepatobiliary surgeon.",
      rating: 4.8,
      numReviews: 12,
      experience: "28+ years",
      slogan: "We Can’t Help With The Second Certainty in Life, But We Can Delay The First One!"
    }
    
  ]
  
  module.exports = doctors;
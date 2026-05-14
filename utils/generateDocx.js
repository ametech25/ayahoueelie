import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from "docx";
import { saveAs } from "file-saver";
import { personalInfo, education, experience, skillCategories, interests } from "../data/portfolioData";

export const generateAndDownloadCV = async () => {
  const children = [];

  // ======================================
  // I - L'ÉTAT CIVIL
  // ======================================
  children.push(
    new Paragraph({
      text: personalInfo.name.toUpperCase(),
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
    })
  );
  children.push(
    new Paragraph({
      text: `${personalInfo.title} - ${personalInfo.tagline}`,
      heading: HeadingLevel.HEADING_2,
      alignment: AlignmentType.CENTER,
    })
  );

  // Ligne de contact (email | phone | location | age | situation)
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: personalInfo.email, bold: true }),
        new TextRun(` | ${personalInfo.phone} | ${personalInfo.location}`),
        new TextRun(` | ${personalInfo.age} | ${personalInfo.maritalStatus}`),
      ],
      alignment: AlignmentType.CENTER,
    })
  );
  children.push(new Paragraph({ text: "" }));
  
  // Profil (Motto / Description) 
  // Même si ce n'est pas une rubrique numérotée explicite, c'est utile comme accroche du CV (ou on peut le mettre juste après État Civil).
  children.push(new Paragraph({ text: personalInfo.description, italics: true, alignment: AlignmentType.CENTER }));
  children.push(new Paragraph({ text: "" }));
  children.push(new Paragraph({ text: "" }));

  // ======================================
  // II - LA FORMATION ET LES COMPÉTENCES
  // ======================================
  children.push(
    new Paragraph({
      text: "II - LA FORMATION ET LES COMPÉTENCES",
      heading: HeadingLevel.HEADING_3,
      border: { bottom: { color: "0052FF", space: 1, value: BorderStyle.SINGLE, size: 6 } },
    })
  );

  // Formations
  children.push(new Paragraph({ text: "Formations Universitaires et Scolaires :", bold: true }));
  education.forEach((edu) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: edu.degree, bold: true }),
          new TextRun(` - ${edu.school} (${edu.location}) `),
          new TextRun({ text: `[${edu.period}]`, color: "0052FF" }),
        ],
        bullet: { level: 0 },
      })
    );
    children.push(new Paragraph({ text: `> ${edu.description}` }));
  });
  
  children.push(new Paragraph({ text: "" }));
  
  // Compétences
  children.push(new Paragraph({ text: "Compétences Actuelles :", bold: true }));
  skillCategories.forEach((cat) => {
    const skillList = cat.skills.map((s) => s.name).join(", ");
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: cat.category, bold: true, color: cat.color ? cat.color.replace("#", "") : "000000" }),
          new TextRun(` : ${skillList}`),
        ],
        bullet: { level: 0 },
      })
    );
  });
  children.push(new Paragraph({ text: "" }));

  // ======================================
  // III - L'EXPÉRIENCE PROFESSIONNELLE
  // ======================================
  children.push(
    new Paragraph({
      text: "III - L'EXPÉRIENCE PROFESSIONNELLE",
      heading: HeadingLevel.HEADING_3,
      border: { bottom: { color: "006837", space: 1, value: BorderStyle.SINGLE, size: 6 } },
    })
  );

  experience.forEach((exp) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: exp.title, bold: true }),
          new TextRun(` chez ${exp.company} (${exp.location}) `),
          new TextRun({ text: `[${exp.period}]`, color: "006837" }),
        ],
      })
    );
    children.push(new Paragraph({ text: exp.desc }));
    
    if (exp.tasks && exp.tasks.length > 0) {
      exp.tasks.forEach((task) => {
         children.push(new Paragraph({ text: task, bullet: { level: 0 } }));
      });
    }
    children.push(new Paragraph({ text: "" }));
  });

  // ======================================
  // IV - LES CENTRES D'INTÉRÊT (DIVERS)
  // ======================================
  children.push(
    new Paragraph({
      text: "IV - LES CENTRES D'INTÉRÊT (DIVERS)",
      heading: HeadingLevel.HEADING_3,
      border: { bottom: { color: "FF073A", space: 1, value: BorderStyle.SINGLE, size: 6 } },
    })
  );

  interests.forEach((int) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: int.title, bold: true }),
          new TextRun(` : ${int.desc}`),
        ],
        bullet: { level: 0 },
      })
    );
  });

  // ======================================
  // Construction du Document
  // ======================================
  const doc = new Document({
    creator: personalInfo.name,
    title: `CV_${personalInfo.name.replace(/\s+/g, '_')}`,
    description: "Curriculum Vitae",
    styles: {
      default: {
        document: {
          run: { font: "Arial", size: 22, color: "333333" },
        },
        heading1: {
          run: { size: 36, bold: true, color: "0052FF", font: "Arial" },
          paragraph: { spacing: { after: 120 } },
        },
        heading2: {
          run: { size: 24, bold: true, color: "FF073A", font: "Arial" },
          paragraph: { spacing: { after: 120 } },
        },
        heading3: {
          run: { size: 24, bold: true, color: "000000", font: "Arial" },
          paragraph: { spacing: { before: 240, after: 120 } },
        },
      },
    },
    sections: [
      {
        properties: {},
        children: children,
      },
    ],
  });

  // Export
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `CV_${personalInfo.name.replace(/\s+/g, '_')}.docx`);
};


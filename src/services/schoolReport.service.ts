class SchoolReportService {
  private data = [
    {
      userName: "Jack Stephan Sheperd",
      categories: [
        {
          categoryName: "Literacy Numeracy",
          categoryData: [
            {
              lessonName: "Math",
              score: 35,
              percentage: 10,
            },
            {
              lessonName: "Science",
              score: 35,
              percentage: 10,
            },
          ],
        },
        {
          categoryName: "Physical Activity",
          categoryData: [
            {
              lessonName: "PE",
              score: 32,
              percentage: 8,
            },
            {
              lessonName: "Bodily Movement",
              score: 40,
              percentage: 15,
            },
            {
              lessonName: "Streching",
              score: 42,
              percentage: 16,
            },
          ],
        },
        {
          categoryName: "Socio Emotional",
          categoryData: [
            {
              lessonName: "testSocio1",
              score: 60,
              percentage: 50,
            },
            {
              lessonName: "testSocio2",
              score: 70,
              percentage: 60,
            },
          ],
        },
        {
          categoryName: "Learning Cognetive",
          categoryData: [
            {
              lessonName: "testCognetive1",
              score: 30,
              percentage: 20,
            },
            {
              lessonName: "testCognetive2",
              score: 35,
              percentage: 21,
            },
          ],
        },
      ],
    },
    {
      userName: "Mary Stephan Sheperd",
      categories: [
        {
          categoryName: "Literacy Numeracy",
          categoryData: [
            {
              lessonName: "Math",
              score: 35,
              percentage: 10,
            },
            {
              lessonName: "Science",
              score: 35,
              percentage: 10,
            },
          ],
        },
        {
          categoryName: "Physical Activity",
          categoryData: [
            {
              lessonName: "PE",
              score: 32,
              percentage: 8,
            },
            {
              lessonName: "Bodily Movement",
              score: 40,
              percentage: 15,
            },
            {
              lessonName: "Streching",
              score: 42,
              percentage: 16,
            },
          ],
        },
        {
          categoryName: "Socio Emotional",
          categoryData: [
            {
              lessonName: "testSocio1",
              score: 60,
              percentage: 50,
            },
            {
              lessonName: "testSocio2",
              score: 70,
              percentage: 60,
            },
          ],
        },
        {
          categoryName: "Learning Cognetive",
          categoryData: [
            {
              lessonName: "testCognetive1",
              score: 30,
              percentage: 20,
            },
            {
              lessonName: "testCognetive2",
              score: 35,
              percentage: 21,
            },
          ],
        },
      ],
    },
  ];

  getSchoolReport = async () => {
    try {
        const result = this.data.map(userData => {
          const categories = userData.categories.map(category => {
            const averageCategory = category.categoryData.reduce((acc, curr) => acc + curr.score, 0) / category.categoryData.length;
            const averagePercentage = category.categoryData.reduce((acc, curr) => acc + curr.percentage, 0) / category.categoryData.length;
            const color = averageCategory >= 50 ? "D6FFE6" : "FFDDD6";
      
            return {
              ...category,
              averageScore: averageCategory,
              averagePercentage,
              color,
              state: false
            };
          });
      
          return {
            ...userData,
            categories,
          };
        });
      
        return result;
      } catch (err) {
        throw err;
      }
  };
}

export default SchoolReportService;

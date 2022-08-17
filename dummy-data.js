const DATA = [
    {
        id: 1,
        jobTitle: 'Warehouse Operative – Peterlee',
        category: 'Warehousing',
        description: '',
        location: '',
        tags: ['aeb'],
        image: 'warehousing.jpg',
        salary: '£19,000'
    },    {
        id: 2,
        jobTitle: 'Food Production – Skelmersdale',
        category: 'Food Production',
        description: '',
        location: '',
        tags: ['ssu'],
        image: 'food-production.avif',
        salary: '£20,000'
    },
    {
        id: 3,
        jobTitle: 'Food Production - Sunderland',
        category: 'Food Production',
        description: '',
        location: '',
        tags: ['aeb', 'ssu'],
        image: 'food-production.avif',
        salary: '£25,000'
    },
    {
        id: 4,
        jobTitle: 'Warehousing – Washington',
        category: 'Warehousing',
        description: '',
        location: '',
        tags: ['aeb'],
        image: 'warehousing.jpg',
        salary: '£18,000'
    },
    {
        id: 5,
        jobTitle: 'Community Care Worker - Hartlepool',
        category: 'Care Assistant',
        description: '',
        location: '',
        tags: [],
        image: 'care-worker.jpeg',
        salary: ''
    }
]

  
  export function getAllJobs() {
    return DATA;
  }

  /*
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DATA.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  */
  
  export function getJobById(id) {
    return DATA.find((job) => job.id == id);
  }

  export async function getJobsData(){

      await fetch('/api/jobs')
          .then(res => res.json())
          .then(data => {
              return data;
          })

  }

  export function getJobsByCategory(category) {
    if(category === 'All'){
      return DATA;
    } else {
    return DATA.filter((job)=>job.category == category)
    }
  }
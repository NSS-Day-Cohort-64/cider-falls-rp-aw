const database = {
  areas: [
    {
      id: 1,
      region: "Northeast",
      mainAttraction: "Chamfort River",
    },
    {
      id: 2,
      region: "North",
      mainAttraction: "Lost Wolf Hiking Trail",
    },
    {
      id: 3,
      region: "Northwest",
      mainAttraction: "Lodge",
    },
    {
      id: 4,
      region: "Southwest",
      mainAttraction: "Gander River",
    },
    {
      id: 5,
      region: "South",
      mainAttraction: "Campgrounds",
    },
    {
      id: 6,
      region: "Southeast",
      mainAttraction: "Pine Puff Trails",
    },
  ],
  services: [
    {
      id: 1,
      name: "Rafting",
    },
    {
      id: 2,
      name: "Canoeing",
    },
    {
      id: 3,
      name: "Fishing",
    },
    {
      id: 4,
      name: "Hiking",
    },
    {
      id: 5,
      name: "Picnicking",
    },
    {
      id: 6,
      name: "Rock Climbing",
    },
    {
      id: 7,
      name: "Lodging",
    },
    {
      id: 8,
      name: "Parking",
    },
    {
      id: 9,
      name: "Info",
    },
    {
      id: 10,
      name: "Zip Lines",
    },
    {
      id: 11,
      name: "Hotel",
    },
    {
      id: 12,
      name: "Restuarant",
    },
    {
      id: 13,
      name: "Office Park",
    },
    {
      id: 14,
      name: "Playground",
    },
    {
      id: 15,
      name: "Food Vendors",
    },
  ],
  supportedServices: [
    { id: 1, areaId: 1, serviceID: 1 },
    { id: 2, areaId: 1, serviceID: 2 },
    { id: 3, areaId: 1, serviceID: 3 },
    { id: 4, areaId: 2, serviceID: 4 },
    { id: 5, areaId: 2, serviceID: 5 },
    { id: 6, areaId: 2, serviceID: 6 },
    { id: 7, areaId: 3, serviceID: 5 },
    { id: 8, areaId: 3, serviceID: 7 },
    { id: 9, areaId: 3, serviceID: 8 },
    { id: 10, areaId: 3, serviceID: 9 },
    { id: 11, areaId: 3, serviceID: 11 },
    { id: 12, areaId: 3, serviceID: 12 },
    { id: 13, areaId: 4, serviceID: 3 },
    { id: 14, areaId: 4, serviceID: 4 },
    { id: 15, areaId: 5, serviceID: 7 },
    { id: 16, areaId: 5, serviceID: 8 },
    { id: 17, areaId: 5, serviceID: 9 },
    { id: 18, areaId: 5, serviceID: 13 },
    { id: 19, areaId: 5, serviceID: 14 },
    { id: 20, areaId: 6, serviceID: 4 },
    { id: 21, areaId: 6, serviceID: 5 },
    { id: 22, areaId: 6, serviceID: 10 },
    { id: 23, areaId: 6, serviceID: 15 },
  ],
  guests: [
    { id: 1, name: "John Smith", areaId: 3 },
    { id: 2, name: "Emma Johnson", areaId: 6 },
    { id: 3, name: "Michael Davis", areaId: 4 },
    { id: 4, name: "Samantha Lee", areaId: 2 },
    { id: 5, name: "Christopher White", areaId: 5 },
    { id: 6, name: "Avery Rodriguez", areaId: 1 },
    { id: 7, name: "Olivia Martin", areaId: 3 },
    { id: 8, name: "Ryan Wilson", areaId: 6 },
    { id: 9, name: "Sophia Turner", areaId: 4 },
    { id: 10, name: "Daniel Hernandez", areaId: 2 },
    { id: 11, name: "Isabella Brown", areaId: 5 },
    { id: 12, name: "Matthew Perez", areaId: 1 },
    { id: 13, name: "Emily Jackson", areaId: 3 },
    { id: 14, name: "Ethan Thompson", areaId: 6 },
    { id: 15, name: "Madison Garcia", areaId: 4 },
    { id: 16, name: "Nicholas Hill", areaId: 2 },
    { id: 17, name: "Chloe Flores", areaId: 5 },
    { id: 18, name: "David Green", areaId: 1 },
    { id: 19, name: "Mia Collins", areaId: 3 },
    { id: 20, name: "Jacob Stewart", areaId: 6 },
    { id: 21, name: "Avery Sanchez", areaId: 4 },
    { id: 22, name: "Victoria Carter", areaId: 2 },
    { id: 23, name: "William Brown", areaId: 5 },
    { id: 24, name: "Natalie Hall", areaId: 1 },
    { id: 25, name: "Andrew Scott", areaId: 3 },
    { id: 26, name: "Grace Wright", areaId: 6 },
    { id: 27, name: "Christopher Evans", areaId: 4 },
    { id: 28, name: "Sofia Phillips", areaId: 2 },
    { id: 29, name: "James Martinez", areaId: 5 },
    { id: 30, name: "Hailey Perez", areaId: 1 },
  ],
};

export const getAreas = () => {
  return database.areas.map((area) => ({ ...area }));
};

export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};

export const getSupportedServices = () => {
  return database.supportedServices.map((supportedService) => ({
    ...supportedService,
  }));
};

export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};

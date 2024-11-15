import { candModel } from "../types/models/candidate.schema";
import { stateModel } from "../types/models/state.schema";

export const initStates = async () => {
  try {
    const states = [
      { name: "Alabama", code: "AL", votes: [], electors: 9 },
      { name: "Alaska", code: "AK", votes: [], electors: 3 },
      { name: "Arizona", code: "AZ", votes: [], electors: 11 },
      { name: "Arkansas", code: "AR", votes: [], electors: 6 },
      { name: "California", code: "CA", votes: [], electors: 55 },
      { name: "Colorado", code: "CO", votes: [], electors: 9 },
      { name: "Connecticut", code: "CT", votes: [], electors: 7 },
      { name: "Delaware", code: "DE", votes: [], electors: 3 },
      { name: "Florida", code: "FL", votes: [], electors: 29 },
      { name: "Georgia", code: "GA", votes: [], electors: 16 },
      { name: "Hawaii", code: "HI", votes: [], electors: 4 },
      { name: "Idaho", code: "ID", votes: [], electors: 4 },
      { name: "Illinois", code: "IL", votes: [], electors: 20 },
      { name: "Indiana", code: "IN", votes: [], electors: 11 },
      { name: "Iowa", code: "IA", votes: [], electors: 6 },
      { name: "Kansas", code: "KS", votes: [], electors: 6 },
      { name: "Kentucky", code: "KY", votes: [], electors: 8 },
      { name: "Louisiana", code: "LA", votes: [], electors: 8 },
      { name: "Maine", code: "ME", votes: [], electors: 4 },
      { name: "Maryland", code: "MD", votes: [], electors: 10 },
      { name: "Massachusetts", code: "MA", votes: [], electors: 11 },
      { name: "Michigan", code: "MI", votes: [], electors: 16 },
      { name: "Minnesota", code: "MN", votes: [], electors: 10 },
      { name: "Mississippi", code: "MS", votes: [], electors: 6 },
      { name: "Missouri", code: "MO", votes: [], electors: 10 },
      { name: "Montana", code: "MT", votes: [], electors: 3 },
      { name: "Nebraska", code: "NE", votes: [], electors: 5 },
      { name: "Nevada", code: "NV", votes: [], electors: 6 },
      { name: "New Hampshire", code: "NH", votes: [], electors: 4 },
      { name: "New Jersey", code: "NJ", votes: [], electors: 14 },
      { name: "New Mexico", code: "NM", votes: [], electors: 5 },
      { name: "New York", code: "NY", votes: [], electors: 29 },
      { name: "North Carolina", code: "NC", votes: [], electors: 15 },
      { name: "North Dakota", code: "ND", votes: [], electors: 3 },
      { name: "Ohio", code: "OH", votes: [], electors: 18 },
      { name: "Oklahoma", code: "OK", votes: [], electors: 7 },
      { name: "Oregon", code: "OR", votes: [], electors: 7 },
      { name: "Pennsylvania", code: "PA", votes: [], electors: 20 },
      { name: "Rhode Island", code: "RI", votes: [], electors: 4 },
      { name: "South Carolina", code: "SC", votes: [], electors: 9 },
      { name: "South Dakota", code: "SD", votes: [], electors: 3 },
      { name: "Tennessee", code: "TN", votes: [], electors: 11 },
      { name: "Texas", code: "TX", votes: [], electors: 38 },
      { name: "Utah", code: "UT", votes: [], electors: 6 },
      { name: "Vermont", code: "VT", votes: [], electors: 3 },
      { name: "Virginia", code: "VA", votes: [], electors: 13 },
      { name: "Washington", code: "WA", votes: [], electors: 12 },
      { name: "West Virginia", code: "WV", votes: [], electors: 5 },
      { name: "Wisconsin", code: "WI", votes: [], electors: 10 },
      { name: "Wyoming", code: "WY", votes: [], electors: 3 },
      { name: "District of Columbia", code: "DC", votes: [], electors: 3 },
    ];

    for (const state of states) {
      const newState = new stateModel(state);
      await newState.save();
    }
  } catch (err) {
    console.error("failed to seed states");
  }
};

export const initCandidates = async () => {
  try {
    const td = new candModel({
      name: "Donald J. Trump",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
      votes: 0,
      color: "red",
    });
    await td.save();

    const kh = new candModel({
      name: "Kamala D. Harris",
      image:
        "https://www.whitehouse.gov/wp-content/uploads/2021/04/V20210305LJ-0043.jpg",
      votes: 0,
      color: "blue",
    });
    await kh.save();

    const js = new candModel({
      name: "Jill Stein",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2016_11/1463891/160318-jill-stein-green-party-yh-1145a.jpg",
      votes: 0,
      color: "yellow",
    });
    await js.save();
  } catch (err) {
    console.error("fail to seed in the seed file");
  }
};

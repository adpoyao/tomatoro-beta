import { SELECT_EXERCISE } from '../actions/actionType'

const initialState = {
  selectedClass: {
    exercise: "Yoga: Neck & Shoulder",
    queue: "Level 1: Begin by taking a deep inhale and roll your shoulders back...",
  },
  level: 1, // 3 levels to choose from
  loading: false,
  error: null,
  exerciseList: [
    {
      exercise: 'Yoga: Neck & Shoulder',
      region: 'Upper Thoracic',
      description: 'This stretch session will help counter the typing shoulders and neck.',
      queue: {
        1:'Level 1: Begin by taking a deep inhale and roll your shoulders back...',
        2:'Level 2: Begin by taking a deep inhale and roll your shoulders back...',
        3:'Level 3: Begin by taking a deep inhale and roll your shoulders back...',
      } 
    },
    {
      exercise: 'Yoga: Lumbar and Upper Thoracic',
      region: 'Lower Thoracic',
      description: 'This stretch session encourage you to lift out of your lower back to counter any weight bearing during your day of sitting.',
      queue: {
        1: 'Level 1: Begin by drawing in your frontal ribs as you lengthen your sternum...',
        2: 'Level 2: Begin by drawing in your frontal ribs as you lengthen your sternum...',
        3: 'Level 3: Begin by drawing in your frontal ribs as you lengthen your sternum...',
      }
    },
    {
      exercise:'Yoga: Pelvis and Hips',
      region: 'Hips',
      description: 'This stretch session is about realigning the base of your spine -  your pelvis.',
      queue: {
        1: 'Level 1: Begin by squaring your hips; lift your frontal hip points as you rotate your inner thighs toward the back of the room...',
        2: 'Level 2: Begin by squaring your hips; lift your frontal hip points as you rotate your inner thighs toward the back of the room...',
        3: 'Level 3: Begin by squaring your hips; lift your frontal hip points as you rotate your inner thighs toward the back of the room...',
      }
    },
    {
      exercise: 'Qigong: Qi and Vitality',
      region: 'Qigong',
      description: 'This flow session strengthens your breaths, vitality and qi',
      queue: {
        1: 'Level 1: Begin by placing your feet hips distance apart. Press down on four corners of your feet as your lift your inner and outer arches...',
        2: 'Level 2: Begin by placing your feet hips distance apart. Press down on four corners of your feet as your lift your inner and outer arches...',
        3: 'Level 3: Begin by placing your feet hips distance apart. Press down on four corners of your feet as your lift your inner and outer arches...',
      }
    }
  ],
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SELECT_EXERCISE:
      return Object.assign({}, state, {
        selectedClass: action.exercise,
      })
  default:
    return state;
  }
}
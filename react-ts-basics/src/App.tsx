import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    //set goals
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>

        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </main>
    </>
  );
}

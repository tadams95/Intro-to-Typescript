import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Make sure to put down some goals!</InfoBox>;
  }

  let warningBox: ReactNode;
  if (goals.length >= 2) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Too many goals on your plate. Achieve some before adding more!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

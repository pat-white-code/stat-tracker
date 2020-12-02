export const meetsGoal = (n, goal, margin, success, warning, neutral) => {
  if(n > goal)return success;
  if(n < goal - margin) return warning;
  return neutral;
}
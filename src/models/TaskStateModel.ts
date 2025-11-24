import type { TaskModel } from "./TaskModel";

//Estado -> Component -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // HISTORICO MAIN FORM
  secondsRemaining: number; // CountDow, historico, mainForm, button
  formattedSecondsRemaining: string; //Titulo, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; //Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};

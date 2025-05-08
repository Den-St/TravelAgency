import { PayloadAction } from "@reduxjs/toolkit";

export type CounterId = string;//тип для идентификатора счетчика

export type CounterStateT = {counter:0}// тип значения для конкретного счетчика

export type CountersStateT =  Record<CounterId, CounterStateT | undefined>// тип для всего стейта счетчиков ключ-айди значение-конкретный счетчик


export type IncrementActionT = PayloadAction<{counterId:CounterId}>// тип для экшена инкремента
export type DecrementActionT = PayloadAction<{counterId:CounterId}>// тип для экшена декремента
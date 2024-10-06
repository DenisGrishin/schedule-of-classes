
/**
* Provides the event type for a given element and handler.
* type MyEvent = EventFor<"input", "onChange">;
*/
type GetEventHandlers<
  T extends keyof JSX.IntrinsicElements
> = Extract<keyof JSX.IntrinsicElements[T], `on${string}`>;
export type EventFor<
  TElement extends keyof JSX.IntrinsicElements,
  THandler extends GetEventHandlers<TElement>
> = JSX.IntrinsicElements[TElement][THandler] extends
  | ((e: infer TEvent) => any)
  | undefined
  ? TEvent
  : never;




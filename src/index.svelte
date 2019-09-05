<script>
  import Stores from "./store";
  import { rect, style } from "./util";
  import { afterUpdate } from "svelte";
  import SharedTransition from "shared-transition";

  let node;
  let transition;

  let store = Stores;

  export let key;
  export let delay;
  export let clear;
  export let duration = 250;
  export let easing = "easing-in-out";

  let autoplay = true;

  let from;
  let fromRect;
  let fromStyle;

  if (store.hasStore(key)) {
    let get = store.getStore(key);
    from = get.node;
    fromRect = get.rect;
    fromStyle = get.style;
  }

  afterUpdate(async () => {
    node = document.querySelector(`[data-key="${key}"]`);
    set(node);
    const toRect = rect(node);
    const toStyle = style(node);

    // ensure that duration is always an Integer.
    duration = typeof duration === "string" ? +duration : duration;

    if (from) {
      transition = new SharedTransition(from, node);
      transition
        .delay(delay)
        .easing(easing)
        .points({
          to: toRect,
          from: fromRect
        })
        .duration(duration)
        .styles({
          to: toStyle,
          from: JSON.parse(fromStyle)
        });

      if (autoplay) {
        await transition.play();
        if (clear) store.removeObj(key);
      }
    }
  });

  export async function play() {
    if (transition) {
      await transition.play();
      if (clear) store.removeStore(key);
    }
  }

  export function pause() {
    if (transition) transition.pause();
  }

  export function update(newNode) {
    set(newNode || node);
  }

  function set(node) {
    let refRect = rect(node);
    const refStyle = style(node);

    store.setStore(key, {
      node,
      rect: refRect,
      style: JSON.stringify(refStyle)
    });
  }
</script>

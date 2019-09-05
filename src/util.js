export function rect(node) {
  return node.getBoundingClientRect();
}

export function style(node) {
  return getComputedStyle(node);
}
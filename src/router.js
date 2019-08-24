
export function ToDosRouter(ctrl) {
  const locationHandler = () => ctrl.showMode(location.hash.slice(2) || 'all');
  window.addEventListener('hashchange', locationHandler);
  locationHandler();
}

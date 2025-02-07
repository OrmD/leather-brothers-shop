
export function getActivePage(e, ref, nav) {
	e.preventDefault(); // Запобігаємо стандартному переходу
	const textContent = ref.current.textContent;
	console.log(textContent);
	const path = e.currentTarget.getAttribute('to'); // Виводимо textContent
	nav(path)

}
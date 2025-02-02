export function getNameImg(url) {
	const nameimg = url.split("/").pop().split(".")[0] + '-img';
	return nameimg
}
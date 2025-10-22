 import networkDocsRedirects from "./networkDocsRedirects.mjs";
import spaceDocsRedirects from "./spaceDocsRedirects.mjs";

export default {
	...networkDocsRedirects,
	...spaceDocsRedirects,
	"/": "/welcome/get-started"
};
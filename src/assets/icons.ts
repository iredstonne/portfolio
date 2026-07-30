import { icon, IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const arrowLeftIcon = faArrowLeft

export const arrowRightIcon = faArrowRight

export const renderIconDefinitionToHTML = (iconDefinition: IconDefinition) =>
    icon(iconDefinition, {
        attributes: {
            "focusable": "false",
            "aria-hidden": "true",
        }
    }).html.join("")

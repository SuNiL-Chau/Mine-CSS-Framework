// Added No Conflict so kindly use jQuery at the start of the function & then $ for rest.
$.noConflict();

import { Alert } from "./components/alert.js";
import { Button } from "./components/btn.js";
import { Dropdown } from "./components/dropdown.js";

jQuery(Alert);
jQuery(Button);
jQuery(Dropdown);
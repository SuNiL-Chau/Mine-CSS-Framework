// Added No Conflict so kindly use jQuery at the start of the function & then $ for rest.
$.noConflict();

import { Copy } from "./components/copyToClipboard";
import { Alert } from "./components/alert";
import { Button } from "./components/btn";
import { Dropdown } from "./components/dropdown";

Copy();
Alert();
Button();
Dropdown();
<?php
if ($_GET['randomId'] != "I1SCTX9zQt7uSJSWtTnBImCjGuXmCXcQQP0IcJxBC2b8nqJ1TyQRGatKsLTtf35Z") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  

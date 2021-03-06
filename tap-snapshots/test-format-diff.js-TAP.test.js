/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/format-diff.js TAP added file > should output expected added file diff result 1`] = `
diff --git a/foo.js b/foo.js
new file mode 100755
index v1.0.0..v2.0.0 
--- a/foo.js	
+++ b/foo.js	
@@ -0,0 +1,2 @@
+"use strict"
+module.exports = "foo"

`

exports[`test/format-diff.js TAP binary file > should output expected bin file diff result 1`] = `
diff --git a/foo.jpg b/foo.jpg
index v1.0.0..v2.0.0 100644
--- a/foo.jpg
+++ b/foo.jpg

`

exports[`test/format-diff.js TAP changed file mode > should output expected changed file mode diff result 1`] = `
diff --git a/foo.js b/foo.js
old mode 100644
new mode 100755
index v1.0.0..v2.0.0 
--- a/foo.js	
+++ b/foo.js	

`

exports[`test/format-diff.js TAP colored output > should output expected colored diff result 1`] = `
[33mdiff --git a/foo.js b/foo.js[39m
[33mindex v1.0.0..v2.0.0 100644[39m
[33m--- a/foo.js	[39m
[33m+++ b/foo.js	[39m
[35m@@ -1,2 +1,2 @@[39m
 "use strict"
[31m-module.exports = "foo"[39m
[32m+module.exports = "foobar"[39m

`

exports[`test/format-diff.js TAP format removed file > should output expected removed file diff result 1`] = `
diff --git a/foo.js b/foo.js
deleted file mode 100644
index v1.0.0..v2.0.0 
--- a/foo.js	
+++ b/foo.js	
@@ -1,2 +0,0 @@
-"use strict"
-module.exports = "foo"
/ No newline at end of file

`

exports[`test/format-diff.js TAP format simple diff > should output expected diff result 1`] = `
diff --git a/foo.js b/foo.js
index v1.0.0..v2.0.0 100644
--- a/foo.js	
+++ b/foo.js	
@@ -1,2 +1,2 @@
 "use strict"
-module.exports = "foo"
+module.exports = "foobar"

`

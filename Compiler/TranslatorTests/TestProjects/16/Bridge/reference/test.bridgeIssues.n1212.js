Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1212.TestIncrementDecrement", {
        methods: {
            TestDouble: function () {
                var v = 0;
                v++;
                v--;
                v = v--;
                v = --v;
                v = v++;
                v = ++v;
                var v1 = v++;
                var v2 = v--;
                var v3 = ++v;
                var v4 = --v;
            },
            TestDecimal: function () {
                var $t;
                var v = System.Decimal(0);
                v = v.inc();
                v = v.dec();
                v = ($t = v, v = v.dec(), $t);
                v = (v = v.dec());
                v = ($t = v, v = v.inc(), $t);
                v = (v = v.inc());
                var v1 = ($t = v, v = v.inc(), $t);
                var v2 = ($t = v, v = v.dec(), $t);
                var v3 = (v = v.inc());
                var v4 = (v = v.dec());
            },
            TestSingle: function () {
                var v = 0;
                v++;
                v--;
                v = v--;
                v = --v;
                v = v++;
                v = ++v;
                var v1 = v++;
                var v2 = v--;
                var v3 = ++v;
                var v4 = --v;
            },
            TestLong: function () {
                var $t;
                var v = System.Int64(0);
                v = v.inc();
                v = v.dec();
                v = ($t = v, v = v.dec(), $t);
                v = (v = v.dec());
                v = ($t = v, v = v.inc(), $t);
                v = (v = v.inc());
                var v1 = ($t = v, v = v.inc(), $t);
                var v2 = ($t = v, v = v.dec(), $t);
                var v3 = (v = v.inc());
                var v4 = (v = v.dec());
            }
        }
    });
});

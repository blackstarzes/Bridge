Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N447.Math447", {
        statics: {
            methods: {
                GetSum$1: function (a, b) {
                    return ((a + b) | 0);
                },
                GetSum$2: function (a, b) {
                    return System.String.concat(a, b);
                },
                GetSum: function (a, b) {
                    return a.add(b);
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N447.N447", {
        statics: {
            fields: {
                Five: 0,
                Another: null,
                Ten: System.Decimal(0.0)
            },
            ctors: {
                init: function () {
                    this.Five = 5;
                    this.Another = "Another";
                    this.Ten = System.Decimal(10.0);
                }
            },
            methods: {
                CheckInlineExpression: function () {
                    var s = "AnotherSome";
                    var i = 20;
                    var d = System.Decimal(10.5);
                },
                CheckInlineCalls: function () {
                    var s = Test.BridgeIssues.N447.Math447.GetSum$2(Test.BridgeIssues.N447.N447.Another, "Some");
                    var i = Test.BridgeIssues.N447.Math447.GetSum$1(Test.BridgeIssues.N447.N447.Five, 15);
                    var d = Test.BridgeIssues.N447.Math447.GetSum(Test.BridgeIssues.N447.N447.Ten, System.Decimal(0.5));
                }
            }
        }
    });
});

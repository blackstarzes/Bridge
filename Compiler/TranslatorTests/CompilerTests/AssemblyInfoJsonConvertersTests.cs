﻿using Bridge.Contract;
using Bridge.Translator.Utils;
using System;
using System.Collections.Generic;
using NUnit.Framework;
using Newtonsoft.Json;


namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class AssemblyInfoJsonConvertersTests
    {
        [Test]
        public void AssemblyInfoJsonConverters_SourceMapConfigConverterSerialization()
        {
            AssertJsonSerialization(new SourceMapInfo(), "{\"SourceMap\":null}", "1");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() },
                "{\"SourceMap\":false}",
                "2");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true } },
                "{\"SourceMap\":true}",
                "3");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = false, Eol = UnicodeNewline.CRLF } },
                "{\"SourceMap\":{\"Enabled\":false,\"Eol\":3338}}",
                "4");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true, Eol = UnicodeNewline.LF } },
                "{\"SourceMap\":{\"Enabled\":true,\"Eol\":10}}",
                "5");
        }

        [Test]
        public void AssemblyInfoJsonConverters_SourceMapConfigConverterDeserialization()
        {
            AssertJsonDeserialization("{\"SourceMap\":null}", new SourceMapInfo(), "1");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"enabled\":false,\"eol\":null}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() },
                "2");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"enabled\":true,\"eol\":null}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true } },
                "3");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"enabled\":false,\"eol\":\"crlf\"}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = false, Eol = UnicodeNewline.CRLF } },
                "4");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"Enabled\":true,\"Eol\":\"Lf\"}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true, Eol = UnicodeNewline.LF } },
                "5");

            AssertJsonDeserialization(
                "{\"SourceMap\":true}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true } },
                "6");

            AssertJsonDeserialization(
                "{\"SourceMap\":false}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = false } },
                "7");
        }

        [Test]
        public void AssemblyInfoJsonConverters_ConsoleConfigConverterSerialization()
        {
            AssertJsonSerialization(new ConsoleInfo(), "{\"Console\":null}", "1");

            AssertJsonSerialization(
                new ConsoleInfo { Console = new ConsoleConfig() },
                "{\"Console\":null}",
                "2");

            AssertJsonSerialization(
                new ConsoleInfo { Console = new ConsoleConfig() { Enabled = true } },
                "{\"Console\":true}",
                "3");

            AssertJsonSerialization(
                new ConsoleInfo { Console = new ConsoleConfig() { Enabled = false } },
                "{\"Console\":false}",
                "4");
        }

        [Test]
        public void AssemblyInfoJsonConverters_ConsoleConfigConverterDeserialization()
        {
            AssertJsonDeserialization("{\"Console\":null}", new ConsoleInfo { Console = new ConsoleConfig() }, "1");

            AssertJsonDeserialization(
                "{\"Console\":null}",
                new ConsoleInfo { Console = new ConsoleConfig() },
                "2");

            AssertJsonDeserialization(
                "{\"Console\":{\"enabled\":true}}",
                new ConsoleInfo { Console = new ConsoleConfig() { Enabled = true } },
                "3");

            AssertJsonDeserialization(
                "{\"Console\":{\"enabled\":false}}",
                new ConsoleInfo { Console = new ConsoleConfig() { Enabled = false } },
                "4");

            AssertJsonDeserialization(
                "{\"Console\":true}",
                new ConsoleInfo { Console = new ConsoleConfig() { Enabled = true } },
                "5");

            AssertJsonDeserialization(
                "{\"Console\":false}",
                new ConsoleInfo { Console = new ConsoleConfig() { Enabled = false } },
                "6");
        }

        private static void AssertJsonSerialization(object value, string expected, string message = null)
        {
            var actual = JsonConvert.SerializeObject(value, Formatting.None);
            Assert.AreEqual(expected, actual, message);
        }

        private static void AssertJsonDeserialization(string json, object expected, string message = null)
        {
            var actual = JsonConvert.DeserializeObject(json, expected.GetType());
            Assert.AreEqual(expected, actual, message);

            //var expectedJson = JsonConvert.SerializeObject(expected, Formatting.None);
            //Assert.AreEqual(expectedJson, json, message + " by json");
        }

        class SourceMapInfo
        {
            [JsonConverter(typeof(SourceMapConfigConverter))]
            public SourceMapConfig SourceMap
            {
                get; set;
            }

            public override bool Equals(object obj)
            {
                if (obj == null)
                {
                    return false;
                }

                var smi = obj as SourceMapInfo;

                if (smi == null)
                {
                    return false;
                }

                var sm1 = this.SourceMap;
                var sm2 = smi.SourceMap;

                if (sm1 == null && sm2 == null)
                {
                    return true;
                }

                if (sm1 == null || sm2 == null)
                {
                    return false;
                }

                return sm1.Enabled == sm2.Enabled
                    && sm1.Eol == sm2.Eol;
            }

            public override int GetHashCode()
            {
                return base.GetHashCode();
            }
        }

        class ConsoleInfo
        {
            [JsonConverter(typeof(ConsoleConfigConverter))]
            public ConsoleConfig Console
            {
                get; set;
            }

            public override bool Equals(object obj)
            {
                if (obj == null)
                {
                    return false;
                }

                var ci = obj as ConsoleInfo;

                if (ci == null)
                {
                    return false;
                }

                var c1 = this.Console;
                var c2 = ci.Console;

                if (c1 == null && c2 == null)
                {
                    return true;
                }

                if (c1 == null || c2 == null)
                {
                    return false;
                }

                return c1.Enabled == c2.Enabled;
            }

            public override int GetHashCode()
            {
                return base.GetHashCode();
            }
        }
    }
}

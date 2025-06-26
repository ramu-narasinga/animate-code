"use client";

import { Card } from "@/src/components/ui/card";
import { Player } from "@remotion/player";
import { Video } from "@thinkthroo/remotion/animate-code/video";
import { Main } from "@/src/remotion/MyComp/Main";
// import { Video } from "@/src/remotion/animate-code/video";
import {
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "@/src/types/constants";
import { useMemo } from "react";

// Dummy data to preview something — replace this with your real timeline state later
const defaultSteps = [
  {
    title: "1. What is Winston?",
    children: { key: null, ref: null, props: {}, _owner: null },
    code: {
      meta: "winston/docs.ts",
      value:
        'const winston = require("winston")\r\n// !callout[/logger/] Winston is a versatile logging library for Node.js with support for multiple transports like console and file.\r\nconst logger = winston.createLogger({\r\n  level: "info",\r\n  format: winston.format.json(),\r\n  defaultMeta: { service: "user-service" },\r\n  transports: [],\r\n})',
      lang: "typescript",
      code: 'const winston = require("winston")\nconst logger = winston.createLogger({\n  level: "info",\n  format: winston.format.json(),\n  defaultMeta: { service: "user-service" },\n  transports: [],\n})',
      tokens: [
        ["const", "#FF7B72"],
        " ",
        ["winston", "#79C0FF"],
        " ",
        ["=", "#FF7B72"],
        " ",
        ["require", "#D2A8FF"],
        ["(", "#C9D1D9"],
        ['"winston"', "#A5D6FF"],
        [")", "#C9D1D9"],
        "\n",
        ["const", "#FF7B72"],
        " ",
        ["logger", "#79C0FF"],
        " ",
        ["=", "#FF7B72"],
        " ",
        ["winston.", "#C9D1D9"],
        ["createLogger", "#D2A8FF"],
        ["({", "#C9D1D9"],
        "\n  ",
        ["level:", "#C9D1D9"],
        " ",
        ['"info"', "#A5D6FF"],
        [",", "#C9D1D9"],
        "\n  ",
        ["format: winston.format.", "#C9D1D9"],
        ["json", "#D2A8FF"],
        ["(),", "#C9D1D9"],
        "\n  ",
        ["defaultMeta: { service:", "#C9D1D9"],
        " ",
        ['"user-service"', "#A5D6FF"],
        " ",
        ["},", "#C9D1D9"],
        "\n  ",
        ["transports: [],", "#C9D1D9"],
        "\n",
        ["})", "#C9D1D9"],
      ],
      annotations: [
        {
          name: "callout",
          query:
            "Winston is a versatile logging library for Node.js with support for multiple transports like console and file.",
          lineNumber: 2,
          fromColumn: 7,
          toColumn: 12,
        },
      ],
      themeName: "github-dark",
      style: { color: "#c9d1d9", background: "#0d1117", colorScheme: "dark" },
    },
    duration: 220,
  },
  {
    title: "2. Adding File Transports",
    children: { key: null, ref: null, props: {}, _owner: null },
    code: {
      meta: "winston/docs.ts",
      value:
        '// !callout[/logger/] Logs with \'error\' level or higher go to `error.log`, and \'info\' or higher go to `combined.log`.\r\nlogger.add(\r\n  new winston.transports.File({\r\n    filename: "error.log",\r\n    level: "error",\r\n  })\r\n)\r\n\r\nlogger.add(\r\n  new winston.transports.File({\r\n    filename: "combined.log",\r\n  })\r\n)',
      lang: "typescript",
      code: 'logger.add(\n  new winston.transports.File({\n    filename: "error.log",\n    level: "error",\n  })\n)\n\nlogger.add(\n  new winston.transports.File({\n    filename: "combined.log",\n  })\n)',
      tokens: [
        ["logger.", "#C9D1D9"],
        ["add", "#D2A8FF"],
        ["(", "#C9D1D9"],
        "\n  ",
        ["new", "#FF7B72"],
        " ",
        ["winston.transports.", "#C9D1D9"],
        ["File", "#D2A8FF"],
        ["({", "#C9D1D9"],
        "\n    ",
        ["filename:", "#C9D1D9"],
        " ",
        ['"error.log"', "#A5D6FF"],
        [",", "#C9D1D9"],
        "\n    ",
        ["level:", "#C9D1D9"],
        " ",
        ['"error"', "#A5D6FF"],
        [",", "#C9D1D9"],
        "\n  ",
        ["})", "#C9D1D9"],
        "\n",
        [")", "#C9D1D9"],
        "\n\n",
        ["logger.", "#C9D1D9"],
        ["add", "#D2A8FF"],
        ["(", "#C9D1D9"],
        "\n  ",
        ["new", "#FF7B72"],
        " ",
        ["winston.transports.", "#C9D1D9"],
        ["File", "#D2A8FF"],
        ["({", "#C9D1D9"],
        "\n    ",
        ["filename:", "#C9D1D9"],
        " ",
        ['"combined.log"', "#A5D6FF"],
        [",", "#C9D1D9"],
        "\n  ",
        ["})", "#C9D1D9"],
        "\n",
        [")", "#C9D1D9"],
      ],
      annotations: [
        {
          name: "callout",
          query:
            "Logs with 'error' level or higher go to `error.log`, and 'info' or higher go to `combined.log`.",
          lineNumber: 1,
          fromColumn: 1,
          toColumn: 6,
        },
      ],
      themeName: "github-dark",
      style: { color: "#c9d1d9", background: "#0d1117", colorScheme: "dark" },
    },
    duration: 220,
  },
  {
    title: "3. Adding Console Transport in Dev Mode",
    children: { key: null, ref: null, props: {}, _owner: null },
    code: {
      meta: "winston/docs.ts",
      value:
        '// !callout[/process/] Logs are printed to console with simple formatting when not in production.\r\nif (process.env.NODE_ENV !== "production") {\r\n  logger.add(\r\n    new winston.transports.Console({\r\n      format: winston.format.simple(),\r\n    })\r\n  )\r\n}',
      lang: "typescript",
      code: 'if (process.env.NODE_ENV !== "production") {\n  logger.add(\n    new winston.transports.Console({\n      format: winston.format.simple(),\n    })\n  )\n}',
      tokens: [
        ["if", "#FF7B72"],
        " ",
        ["(process.env.", "#C9D1D9"],
        ["NODE_ENV", "#79C0FF"],
        " ",
        ["!==", "#FF7B72"],
        " ",
        ['"production"', "#A5D6FF"],
        [") {", "#C9D1D9"],
        "\n  ",
        ["logger.", "#C9D1D9"],
        ["add", "#D2A8FF"],
        ["(", "#C9D1D9"],
        "\n    ",
        ["new", "#FF7B72"],
        " ",
        ["winston.transports.", "#C9D1D9"],
        ["Console", "#D2A8FF"],
        ["({", "#C9D1D9"],
        "\n      ",
        ["format: winston.format.", "#C9D1D9"],
        ["simple", "#D2A8FF"],
        ["(),", "#C9D1D9"],
        "\n    ",
        ["})", "#C9D1D9"],
        "\n  ",
        [")", "#C9D1D9"],
        "\n",
        ["}", "#C9D1D9"],
      ],
      annotations: [
        {
          name: "callout",
          query:
            "Logs are printed to console with simple formatting when not in production.",
          lineNumber: 1,
          fromColumn: 5,
          toColumn: 11,
        },
      ],
      themeName: "github-dark",
      style: { color: "#c9d1d9", background: "#0d1117", colorScheme: "dark" },
    },
    duration: 220,
  },
  {
    title: "4. n8n: Creating Internal Logger",
    children: { key: null, ref: null, props: {}, _owner: null },
    code: {
      meta: "n8n/logger.ts",
      value:
        "// !callout[/internalLogger/] n8n creates a logger instance without transports initially, allowing dynamic config.\r\nthis.internalLogger = winston.createLogger({\r\n  level: this.level,\r\n  silent: isSilent,\r\n})",
      lang: "typescript",
      code: "this.internalLogger = winston.createLogger({\n  level: this.level,\n  silent: isSilent,\n})",
      tokens: [
        ["this", "#79C0FF"],
        [".internalLogger", "#C9D1D9"],
        " ",
        ["=", "#FF7B72"],
        " ",
        ["winston.", "#C9D1D9"],
        ["createLogger", "#D2A8FF"],
        ["({", "#C9D1D9"],
        "\n  ",
        ["level:", "#C9D1D9"],
        " ",
        ["this", "#79C0FF"],
        [".level,", "#C9D1D9"],
        "\n  ",
        ["silent: isSilent,", "#C9D1D9"],
        "\n",
        ["})", "#C9D1D9"],
      ],
      annotations: [
        {
          name: "callout",
          query:
            "n8n creates a logger instance without transports initially, allowing dynamic config.",
          lineNumber: 1,
          fromColumn: 6,
          toColumn: 19,
        },
      ],
      themeName: "github-dark",
      style: { color: "#c9d1d9", background: "#0d1117", colorScheme: "dark" },
    },
    duration: 220,
  },
  {
    title: "5. n8n: Console and File Transports",
    children: {
      key: null,
      ref: null,
      props: {
        children: [
          { type: "hr", key: null, ref: null, props: {}, _owner: null },
          {
            type: "p",
            key: null,
            ref: null,
            props: {
              children: [
                {
                  type: "strong",
                  key: null,
                  ref: null,
                  props: { children: "title" },
                  _owner: null,
                },
                ": Winston Logger in n8n – Console & File Transport Breakdown\r\n",
                {
                  type: "strong",
                  key: null,
                  ref: null,
                  props: { children: "description" },
                  _owner: null,
                },
                ": Ever wondered how logging works in production-grade apps like n8n? This video breaks down Winston—a flexible logger used in n8n—to explain how console and file transports are configured. Learn from real-world usage and apply these patterns in your Node.js apps.\r\n",
                {
                  type: "strong",
                  key: null,
                  ref: null,
                  props: { children: "tags" },
                  _owner: null,
                },
                ": [winston, logging, nodejs, n8n, transports, console, file, open source, code walkthrough]",
              ],
            },
            _owner: null,
          },
          {
            type: "pre",
            key: null,
            ref: null,
            props: {
              children: {
                type: "code",
                key: null,
                ref: null,
                props: {},
                _owner: null,
              },
            },
            _owner: null,
          },
        ],
      },
      _owner: null,
    },
    code: {
      meta: "n8n/logger.ts",
      value:
        '// !callout[/internalLogger/] Adds console transport with environment-aware formatting.\r\nthis.internalLogger.add(\r\n  new winston.transports.Console({\r\n    format: winston.format.printf(({ message }) => message),\r\n  })\r\n)\r\n\r\n// !callout[/internalLogger/] Adds file transport with timestamp and JSON formatting.\r\nthis.internalLogger.add(\r\n  new winston.transports.File({\r\n    filename: "logs/app.log",\r\n    format: winston.format.combine(\r\n      winston.format.timestamp(),\r\n      winston.format.metadata(),\r\n      winston.format.json()\r\n    ),\r\n  })\r\n)',
      lang: "typescript",
      code: 'this.internalLogger.add(\n  new winston.transports.Console({\n    format: winston.format.printf(({ message }) => message),\n  })\n)\n\nthis.internalLogger.add(\n  new winston.transports.File({\n    filename: "logs/app.log",\n    format: winston.format.combine(\n      winston.format.timestamp(),\n      winston.format.metadata(),\n      winston.format.json()\n    ),\n  })\n)',
      tokens: [
        ["this", "#79C0FF"],
        [".internalLogger.", "#C9D1D9"],
        ["add", "#D2A8FF"],
        ["(", "#C9D1D9"],
        "\n  ",
        ["new", "#FF7B72"],
        " ",
        ["winston.transports.", "#C9D1D9"],
        ["Console", "#D2A8FF"],
        ["({", "#C9D1D9"],
        "\n    ",
        ["format: winston.format.", "#C9D1D9"],
        ["printf", "#D2A8FF"],
        ["(({", "#C9D1D9"],
        " ",
        ["message", "#FFA657"],
        " ",
        ["})", "#C9D1D9"],
        " ",
        ["=>", "#FF7B72"],
        " ",
        ["message),", "#C9D1D9"],
        "\n  ",
        ["})", "#C9D1D9"],
        "\n",
        [")", "#C9D1D9"],
        "\n\n",
        ["this", "#79C0FF"],
        [".internalLogger.", "#C9D1D9"],
        ["add", "#D2A8FF"],
        ["(", "#C9D1D9"],
        "\n  ",
        ["new", "#FF7B72"],
        " ",
        ["winston.transports.", "#C9D1D9"],
        ["File", "#D2A8FF"],
        ["({", "#C9D1D9"],
        "\n    ",
        ["filename:", "#C9D1D9"],
        " ",
        ['"logs/app.log"', "#A5D6FF"],
        [",", "#C9D1D9"],
        "\n    ",
        ["format: winston.format.", "#C9D1D9"],
        ["combine", "#D2A8FF"],
        ["(", "#C9D1D9"],
        "\n      ",
        ["winston.format.", "#C9D1D9"],
        ["timestamp", "#D2A8FF"],
        ["(),", "#C9D1D9"],
        "\n      ",
        ["winston.format.", "#C9D1D9"],
        ["metadata", "#D2A8FF"],
        ["(),", "#C9D1D9"],
        "\n      ",
        ["winston.format.", "#C9D1D9"],
        ["json", "#D2A8FF"],
        ["()", "#C9D1D9"],
        "\n    ",
        ["),", "#C9D1D9"],
        "\n  ",
        ["})", "#C9D1D9"],
        "\n",
        [")", "#C9D1D9"],
      ],
      annotations: [
        {
          name: "callout",
          query: "Adds console transport with environment-aware formatting.",
          lineNumber: 1,
          fromColumn: 6,
          toColumn: 19,
        },
        {
          name: "callout",
          query: "Adds file transport with timestamp and JSON formatting.",
          lineNumber: 7,
          fromColumn: 6,
          toColumn: 19,
        },
      ],
      themeName: "github-dark",
      style: { color: "#c9d1d9", background: "#0d1117", colorScheme: "dark" },
    },
    duration: 220,
  },
];

export default function Preview() {
  const inputProps = useMemo(() => {
    return {
      videoTitle: "Animated Code Preview",
      steps: defaultSteps,
    };
  }, []);

  return (
    <Card
      className="flex-1 m-2 border-dashed flex items-center justify-center p-4"
      style={{ height: 500 }}
    >
      <Player
        component={Video}
        inputProps={inputProps}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        compositionHeight={VIDEO_HEIGHT}
        compositionWidth={VIDEO_WIDTH}
        controls
        autoPlay
        loop
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Card>
  );
}

package settings

import (
	"fmt"
	"os"
)

// Geth configs
var MOONSTREAM_NODE_ETHEREUM_IPC_ADDR = os.Getenv("MOONSTREAM_NODE_ETHEREUM_IPC_ADDR")
var MOONSTREAM_NODE_ETHEREUM_IPC_PORT = os.Getenv("MOONSTREAM_NODE_ETHEREUM_IPC_PORT")
var MOONSTREAM_NODE_ETHEREUM_IPC_PATH = fmt.Sprintf("http://%s:%s", MOONSTREAM_NODE_ETHEREUM_IPC_ADDR, MOONSTREAM_NODE_ETHEREUM_IPC_PORT)

// Bor configs
var MOONSTREAM_NODE_POLYGON_IPC_ADDR = os.Getenv("MOONSTREAM_NODE_POLYGON_IPC_ADDR")
var MOONSTREAM_NODE_POLYGON_IPC_PORT = os.Getenv("MOONSTREAM_NODE_POLYGON_IPC_PORT")
var MOONSTREAM_NODE_POLYGON_IPC_PATH = fmt.Sprintf("http://%s:%s", MOONSTREAM_NODE_POLYGON_IPC_ADDR, MOONSTREAM_NODE_POLYGON_IPC_PORT)

// CORS
var MOONSTREAM_CORS_ALLOWED_ORIGINS = os.Getenv("MOONSTREAM_CORS_ALLOWED_ORIGINS")

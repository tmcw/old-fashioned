require("conform").setup({
	formatters_by_ft = {
		javascript = { { "deno_fmt" } },
		typescript = { { "deno_fmt" } },
		typescriptreact = { { "deno_fmt" } },
	},
})

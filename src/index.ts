import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.register(require("fastify-cors"), { origin: false }).register(require("./wecom"), { prefix: "/wecom" });

const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

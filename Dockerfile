FROM node AS build
WORKDIR /app
RUN chmod 755 /app
COPY ./ ./
RUN npm install
RUN npm run check
RUN npm run build
RUN rm -drf ./node_modules
RUN npm install --omit=dev

FROM build AS publish
COPY --from=build /app/build/ ./build/
COPY --from=build /app/node_modules/ ./node_modules/

EXPOSE 3000
ENTRYPOINT [ "node", "build" ]